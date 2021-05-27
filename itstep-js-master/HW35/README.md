До 16.05 в 12:00

- Сделать калькулятор
- Одно поле

Призовые категории (+1 балл на экзамене)
1. Количество поддерживаемых функций
  Определять число
  + - * /
  ()
  ^
  sin()
  cos()
  ln()
  sqrt()
  константы e pi

  комплексные числа

  Порядок действий  2 + 2 * 2 = 6

2. Самое элегантное решение


// input -> result


number = \d+


factor = power | number | bracketed
prodcut = seq(factor, gluedBy (*/) (factor)) 


term = pow | product | number | bracketed
sum = seq(term, gluedBy (+-) (term)) 


1+2+3*4+5 = [1, +, 2, +, [3, *, 4], +, 5 ]

// 1+2+3*4+5 => 1+2+12+5 => 3+12+5 => 15+5 => 20