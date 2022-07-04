/**
 * item1 A
 * item2 B
 * item1 C
 * item3 A
 * item4 B
 *
 * 우선순위
 * 각 아이템별 제일 많이 매겨진 등급이 main grade
 * 개수가 동일하다면 높은 등급이 main grade
 * 그 다음 비교 대상은 다시 메인 등급
 * 그것마저 동일하다면 item의 이름 알파벳 순
 * 각 등급별 아이템들을 정렬하여 문자열로 묶어 배열로 return
 * 해당 등급에 아이템이 없다면 "-"
 * ["item1 item3", "-", "item2"]
 *
 * "A B C A A A A item1" 이런식으로 만들어 비교
 */
