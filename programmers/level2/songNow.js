function solution(m, musicinfos) {
    let maxTime = -1;
    let maxTitle = '';
    for (let i = 0; i < musicinfos.length; i++) {
        let [time, title] = isIn(m, musicinfos[i]);
        if (time > maxTime) {
            maxTime = time;
            maxTitle = title;
        }
    }
    if (maxTime === -1) return "(None)";
    return maxTitle;
}

function isIn(m, info) {
    let [start, end, title, note] = info.split(",");
    let [sHour, sMinute] = start.split(":");
    let [eHour, eMinute] = end.split(":");
    let time = (parseInt(eHour) - parseInt(sHour)) * 60 + parseInt(eMinute) - parseInt(sMinute);
    console.log(time)
    let convertedNote = converting(note);

    let repeatTime = Math.floor(time / (convertedNote.length));
    let remainTime = time % (convertedNote.length);

    let totalMelody = convertedNote.repeat(repeatTime);
    for (let i = 0; i < remainTime; i++) {
        totalMelody += convertedNote[i];
    }

    if (totalMelody.includes(converting(m))) {// matched
        return [time, title];
    } else {// no matched
        return [-1, title];
    }
}

function converting(m) {
    let index = {"C#": "c", "D#": "d", "F#": "f", "A#": "a", "E#":"z", "G#":'g'}
    let res = '';
    let str = '';
    for (let i = 0; i < m.length; i++) {
        str = m[i];
        if (i < m.length - 1 && m[i + 1] === '#') {
            str += m[i + 1];
            str = index[str];
            i++;
        }
        res += str;
    }
    return res;
}