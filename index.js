// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);


// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0;i < a.length; i++) {
    a[i] *= 2;
}
console.log(a);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1,case2,case3;
for (let i = 0;i < colors.length;i++) {
    if (i == 0) {
        case1 = colors[i];
        case2 = colors[i];
        case3 = colors[i];
    }
    else {
        case1 = case1 + " " + colors[i];
        case2 = case2 + "+" + colors[i];
        case3 = case3 + "," + colors[i];
    }
}
console.log(case1);
console.log(case2);
console.log(case3);


// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log(
    a.sort(
        function (a,b) {
            return a < b;
        }
    )
);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var counter= {};
for (let i = 0;i < a.length; i++) {
    counter[a[i]] ? counter[a[i]]++ : counter[a[i]] = 1;
}
var index = Object.keys(counter);
var max=0,ans;
for (let i = 0;i < index.length; i++) {
    if (counter[index[i]] > max) {
        max = counter[index[i]];
        ans = index[i];
    }
}
console.log(ans);
