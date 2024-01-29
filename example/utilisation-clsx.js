import clsx from 'clsx';

const clsWelcome1 = clsx('class1', gender === 'M' && 'class2', 'my-class', firstname[0] === 'A' && style.demo);
const clsWelcome2 = clsx({
    class1: true,
    class2: gender === 'M',
    'my-class': true,
    [style.demo]: firstname[0] === 'A'
});


// Balthy M -> 'test toto my-name'
// Alex F   -> 'test my-name demo_4213'