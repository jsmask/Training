//1.翻转字符串算法  
//例如:hello -> olleh
function reverseString(str) {
	return str.toString().split('').reverse().join('');
}

//2.阶乘算法  
//例如: 5! = 1 * 2 * 3 * 4 * 5 = 120, 0! = 1
function factorialize(num) {
	var sum = ~~(num);
	if(sum == 0) return 1;
	if(num > 2) {
		sum *= factorialize(num - 1)
	}
	return sum;
}

//3.回文算法 
//例如："My age is 0, 0 si ega ym." -> true
//如果给定的字符串是回文，返回true，反之，返回false。
//palindrome(回文)是指一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样。
//注意:您需要删除字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是不是回文。
//函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。
//法1：
function palindrome(str) {
	var re = /[\W_]/g; // 或者 var re = /[^A-Za-z0-9]/g;
	var lowRegStr = str.toLowerCase().replace(re, '');
	var reverseStr = lowRegStr.split('').reverse().join('');
	return reverseStr === lowRegStr;
}
//法2：
function palindrome2(str) {
	var re = /[\W_]/g;
	var lowRegStr = str.toLowerCase().replace(re, '');
	var len = lowRegStr.length;
	for(var i = 0, halfLen = len / 2; i < halfLen; i++) {
		if(lowRegStr[i] !== lowRegStr[len - 1 - i]) {
			return false;
		}
	}
	return true;
}

//4.寻找最长单词算法  
//例如："The quick brown fox jumped over the lazy dog" -> 6
//返回提供的句子中最长的单词的长度。
//返回值应该是一个数字。
function findLongestWord(str) {
	var arr = str.split(' ');
	var max = 0;
	for(var i = 0; i < arr.length; i++) {
		if(max < arr[i].length) max = arr[i].length
	}
	return max;
}

//5.设置首字母大写算法
//返回一个字符串,确保字符串的每个单词首字母都大写，其余部分小写。
//像'the'和'of'这样的连接符同理。
function titleCase(str) {
	var arr = str.split(' ');
	var rel = [];
	for(var i = 0; i < arr.length; i++) {
		var a = arr[i];
		rel.push(a.substr(0, 1).toUpperCase() + a.substr(1, a.length - 1).toLowerCase());
	}
	return rel.join(" ");
}

//6.寻找数组中的最大值算法
//在右边的大数组中包含了4个小数组，请分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新的数组。
//提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。
function largestOfFour(arr) {
	var _arr = []
	for(var i = 0; i < arr.length; i++) {
		var max = 0;
		for(var j = 0; j < arr[i].length; j++) {
			if(max < arr[i][j]) max = arr[i][j]
		}
		_arr.push(max);
	}
	return _arr;
}

//7.确认末尾字符算法
//例如：confirmEnding("Bastian", "n") -> true
//检查一个字符串(str)是否以指定的字符串(target)结尾。
//如果是，返回true;如果不是，返回false。
//这个挑战可以通过在ES2015中引入的.endsWith()方法来解决。但是出于这个挑战的目的，我们希望您使用JavaScript子串方法之一。
function confirmEnding(str, target) {
	return String.prototype.endsWith ? str.endsWith(target) : (str.substr(str.length - 1, 1) == target)
}

//8.重复操作算法
//例如：repeat("*", 3) -> "***"
//循环拼接一个指定的字符串 num次，如果num是一个负数,则返回一个空字符串。
function repeat(str, num) {
	var num = ~~(num);
	if(num < 0) return "";
	return new Array(num + 1).join(str);
}

//9.字符串截取算法
//truncate("A-tisket a-tasket A green and yellow basket", 11) -> "A-tisket...".
//如果字符串的长度比给定的参数num长，则把多余的部分用...来表示。
//切记，插入到字符串尾部的三个点号也会计入字符串的长度。
//然而，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
function truncate(str, num) {
	return(str.length > ~~(num)) ? (str.substr(0, (num > 3 ? (num - 3) : num)) + "...") : str;
}

//10.数组分割算法
//编写一个函数,把一个数组arr按照指定的数组大小size分割成若干个数组块。
//例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];
//chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
//法1：
function chunk(arr, size) {
	var rel = [];
	for(var i = 0; i < arr.length; i += size) {
		var _a = []
		for(var j = 0; j < size; j++) {
			if(arr[i + j]) _a.push(arr[i + j]);
		}
		rel.push(_a)
	}
	return rel;
}
//法2：
function chunk2(arr, size) {
	var _arr = [];
	for(var i = 0; i < arr.length; i += size) {
		_arr.push(arr.slice(i, i + size));
	}
	return _arr;
}

//11.数组截断算法
//例如：slasher([1, 2, 3], 2) -> [3]
//返回一个数组被截断n个元素后还剩余的元素，从索引0开始截断。
function slasher(arr, howMany) {
	return arr.slice(howMany, arr.length);
}

//12.数组查询算法
//如果数组第一个字符串元素包含了第二个字符串元素的所有字符，则函数返回true。
//举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。
//["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
//["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。
//法1：
function mutation(arr) {
	var a = arr[0].toLowerCase();
	var b = arr[1].split('');
	if(a.length < b.length) return false;
	for(var i = 0; i < b.length; i++) {
		if(a.indexOf(b[i].toLowerCase()) === -1) {
			return false;
		}
	}
	return true;
}
//法2
function mutation2(arr) {
	var str1 = arr[0].toLowerCase();
	var str2 = arr[1].toLowerCase();
	return ![].some.call(str2, function(n) {
		return !~str1.indexOf(n);
	});
}

//13.删除数组中特定值算法(假值)
//删除数组中的所有的假值。
//例如：bouncer([7, "ate", "", false, 9]) -> [7, "ate", 9]
//在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
//法1：
function bouncer(arr) {
	var _arr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i]) _arr.push(arr[i])
	}
	return _arr;
}
//法2：
function bouncer2(arr) {
	return arr.filter(function(n) {
		if(n) return true
	});
}

//14.去除数组中任意多个值算法
//实现一个 destroyer 函数，第一个参数是初始数组，后跟一个或多个参数。从初始数组中删除与这些参数具有相同值的所有元素。
//例如：destroyer([1, 2, 3, 1, 2, 3], 2, 3) 应该返回 [1, 1]
function destroyer(arr) {
	var str = '';
	for(var i = 1; i < arguments.length; i++) {
		str += arguments[i];
	}
	return [].filter.call(arr, function(n) {
		if(str.indexOf(n) === -1) return true;
	});
}

//15.数组排序并插入值算法
//先给数组排序，然后找到指定的值在数组的位置，最后返回位置对应的索引。
//举例：where([1,2,3,4], 1.5) 应该返回 1。因为1.5插入到数组[1,2,3,4]后变成[1,1.5,2,3,4]，而1.5对应的索引值就是1。
//同理，where([20,3,5], 19) 应该返回 2。因为数组会先排序为 [3,5,20]，19插入到数组[3,5,20]后变成[3,5,19,20]，而19对应的索引值就是2。
//法1：
function where(arr, num) {
	var arr = arr.concat(num);
	for(var i = 0; i < arr.length - 1; i++) {
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[i]) {
				var t = arr[i];
				arr[i] = arr[j]
				arr[j] = t;
			}
		}
		if(arr[i] == num) return i
	}
}
//法2：
function where2(arr, num) {
	var arr = arr.concat(num);
	console.time()
	arr.sort(function(a, b) {
		return a - b;
	})

	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == num) return i
	}
}

//16.位移密码算法
//著名的凯撒密码Caesar cipher，又叫移位密码。
//移位密码也就是密码中的字母会按照指定的数量来做移位。
//一个常见的案例就是ROT13密码，字母会移位13个位置。由'A' ↔ 'N', 'B' ↔'O'，以此类推。
//写一个ROT13函数，实现输入加密字符串，输出解密字符串。
//所有的字母都是大写，不要转化任何非字母形式的字符(例如：空格，标点符号)，遇到这些特殊字符，就跳过它们。
//例如：rot13("SERR PBQR PNZC") 应该解码为 "FREE CODE CAMP"
function rot13(str) {
	var rel = "";
	for(var i = 0; i < str.toUpperCase().length; i++) {
		var _n = str.charCodeAt(i);
		if(_n >= 65 && _n <= 90) {
			rel += String.fromCharCode((_n + 13) > 90 ? ((_n + 13) % 90 + 65 - 1) : (_n + 13))
		} else {
			rel += str.charAt(i);
		}
	}
	return rel;
}

/***************************************************************/
//17.区间求值算法
//传递一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。
//最小的数字并非总在最前面。
//例如：sumAll([1, 4]) -> 10。
function sumAll(arr) {
	var _arr = [];
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	for(var i = 0; i < max - min + 1; i++) {
		_arr.push(i + min);
	}
	return _arr.reduce(function(total, n) {
		return total + n;
	});
}

//18.找出数组间差异算法
//比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
//例如：[1, 2, 3, 5], [1, 2, 3, 4, 5] -> [4]
function diff(arr1, arr2) {
	return [].filter.call(arr1.concat(arr2), function(n) {
		if(arr1.indexOf(n) === -1 || arr2.indexOf(n) === -1) return true;
	})
}

//19.数字转罗马数字
//将给定的数字转换成罗马数字。
//所有返回的 罗马数字 都应该是大写形式。
//罗马数字详见 https://www.mathsisfun.com/roman-numerals.html
//例如：convert(2) -> "II"。
function convert(num) {
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
	var rule = ['M', 'CM', 'D', 'DC', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	var str = "";
	numbers.forEach(function(item, index) {
		while(num >= item) {
			str += rule[index];
			num -= item;
		}
	});
	return str;
}

//20.对象搜索算法
//写一个 function方法，它遍历一个对象数组（第一个参数）并返回一个包含相匹配的属性-值对（第二个参数）的所有对象的数组。
//如果返回的数组中包含 source 对象的属性-值对，那么此对象的每一个属性-值对都必须存在于 collection 的对象中。
//例如：where([{first: "Romeo", last: "Montague" },{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" }],{last:"Capulet"}) -> [{ first: "Tybalt", last: "Capulet" }]
//法1：
function where(collection, source) {
	var arr = [];
	for(var i = 0; i < collection.length; i++) {
		var count = 0;
		for(var item in source) {
			if(collection[i].hasOwnProperty(item)) {
				if(collection[i][item] === source[item])
					count++
			}
		}
		if(count == Object.keys(source).length)
			arr.push(collection[i])
	}
	return arr;
}
//法2:
function where2(collection, source) {
	var arr = [];
	var sss = Object.keys(source);
	var rel = [];
	for(var i = 0; i < collection.length; i++) {
		for(var j = 0; j < sss.length; j++) {
			if(collection[i][sss[j]] == source[sss[j]]) {
				rel.push(0);
			} else {
				rel.push(1);
			}
		}
		if(rel.indexOf(1) < 0) {
			arr.push(collection[i]);
		} else {
			rel = [];
		}
	}
	return arr;
}

//21.字符串查询替换算法
//使用给定的参数对字符串执行一次查找和替换，然后返回新字符串。
//第一个参数是将要对其执行查找和替换的字符串。
//第二个参数是将被替换掉的单词（替换前的单词）。
//第三个参数用于替换第二个参数（替换后的单词）。
//注意：替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
//例如：myReplace("His name is Tom", "Tom", "john") -> "His name is John"
function myReplace(str, before, after) {
	var arr = str.split(' ');
	var _arr = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == before) {
			if(arr[i].substr(0, 1).toUpperCase() == arr[i].substr(0, 1))
				_arr.push(after.substr(0, 1).toUpperCase() + after.substr(1, after.length - 1))
			else _arr.push(after)
		} else _arr.push(arr[i])
	}
	return _arr.join(' ');
}

//22.字符串移动插入算法
//把指定的字符串翻译成 pig latin。
//Pig Latin 把一个英文单词的第一个辅音或辅音丛（consonant cluster）移到词尾，然后加上后缀 "ay"。
//如果单词以元音开始，你只需要在词尾添加 "way" 就可以了。
//输入字符串保证是英文单词全部小写。
//例如：translate("california") -> "aliforniacay"
function translate(str) {
	var str = str.toLowerCase();
	var pig = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", "g", "G"];
	var first = str.charAt(0);
	if(pig.indexOf(first) < 0) {
		return str.substr(1, str.length - 1) + str.charAt(0) + "ay";
	} else if(str.substr(0, 2) == "gl") {
		return str.substr(2, str.length - 1) + str.substr(0, 2) + "ay";
	} else return str + "way";
}

//23.字符配对算法
//DNA 链缺少配对的碱基。依据每一个碱基，为其找到配对的碱基，然后将结果作为第二个数组返回。
//Base pairs（碱基对） 是一对 AT 和 CG，为给定的字母匹配缺失的碱基。
//在每一个数组中将给定的字母作为第一个碱基返回。
//例如，对于输入的 GCG，相应地返回 [["G", "C"], ["C","G"],["G", "C"]]
//字母和与之配对的字母在一个数组内，然后所有数组再被组织起来封装进一个数组。
//例如：pair("ATCGA")-> [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]。
//法1：
function pair(str) {
	var arr = str.toUpperCase().split('');
	var rel = [];
	var data = {
		at: ['A', 'T'],
		cg: ['C', 'G']
	}
	for(var n = 0; n < arr.length; n++) {
		for(var item in data) {
			if(data[item].indexOf(arr[n]) > -1) {
				rel.push([data[item][data[item].indexOf(arr[n])], data[item][~data[item].indexOf(arr[n]) + 2]])
			}
		}
	}
	return rel;
}
//法2：
function pair2(str) {
	var rel = [];
	var bp = {
		A: "T",
		T: "A",
		C: "G",
		G: "C"
	};
	var strarr = str.split("");
	for(var i = 0; i < strarr.length; i++) {
		rel[i] = [strarr[i]];
		rel[i].push(bp[strarr[i]]);
	}
	return rel;
}

//24：字符串查询补充算法
//从传递进来的字母序列中找到缺失的字母并返回它。
//如果所有字母都在序列中，返回 undefined。
//例如：fearNotLetter("abce") -> "d"
function fearNotLetter(str) {
	var str = str.toLowerCase();
	var arr = [],
		before = str.charCodeAt(0);
	for(var i = 1; i < str.length; i++) {
		console.log("1:", i, before)
		if(before + 1 != str.charCodeAt(i)) {
			for(var j = before + 1; j < str.charCodeAt(i); j++) {
				arr.push(String.fromCharCode(j))
			}
		}
		before = str.charCodeAt(i);
	}
	return arr.join('') || undefined;
}

//25.输入检查算法
//检查一个值是否是基本布尔类型，并返回 true 或 false。
//例如：boo(true) -> true
//法1：
function boo(bool) {
	return typeof bool == "boolean";
}
//法2：
function boo2(bool) {
	return Boolean(bool) === bool;
}

//26.数组去重算法
//写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
//换句话说，所有数组中的所有值都应该以原始顺序被包含在内，但是在最终的数组中不包含重复值。
//非重复的数字应该以它们原始的顺序排序，但最终的数组不应该以数字顺序排序。
//例如：unite([1, 3, 2], [5, 2, 1, 4], [2, 1]) -> [1, 3, 2, 5, 4]
function unite() {
	var arr = arguments[0];
	for(var i = 1; i < arguments.length; i++) {
		for(var j = 0; j < arguments[i].length; j++) {
			if(arr.indexOf(arguments[i][j]) == -1)
				arr.push(arguments[i][j]);
		}
	}
	return arr;
}

//27.html符号转实体算法
//将字符串中的字符 &、<、>、" （双引号）, 以及 ' （单引号）转换为它们对应的 HTML 实体。
//例如：convert("Dolce & Gabbana") ->  Dolce &​amp; Gabbana
//提示：RegExpHTML Entities String.prototype.replace()
function convert(str) {
	var data = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;'
	};
	return str.replace(/[&<>'"]/g, function(matched) {
		return data[matched];
	})
}

//28.字符串连接算法
//将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
//spinalCase("This Is Spinal Tap") -> "this-is-spinal-tap"
function spinalCase(str) {
	return str.replace(/\s|_/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

//29.斐波纳契奇数求和算法
//给一个正整数num，返回小于或等于num的斐波纳契奇数之和。
//斐波纳契序列中的前两个数字是1和1.序列中的每个附加数字是前面两个数字的和。斐波纳契序列的前六个数字是1,1,2,3,5和8。
//例如，sumFibs(4)应该返回 5，因为斐波纳契数列中所有小于4的奇数是 1、1、3。
//提示：此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
//例如：sumFibs(1000) -> 1785
//法1:
function sumFibs(num) {
	var arr = [1, 1];
	while(true) {
		var n = arr[arr.length - 1] + arr[arr.length - 2];
		if(n > num) {
			return arr.filter(function(n) {
				return Boolean(n % 2);
			}).reduce(function(a, b) {
				return a + b;
			})
		}
		arr.push(n)
	}
}
//法2:
function sumFibs2(num) {
	var fibo = [1, 1];
	var oddSum = 2;
	while(true) {
		var item = fibo[0] + fibo[1];
		if(num < item) {
			return oddSum;
		}
		if(item % 2) {
			oddSum += item;
		}
		fibo[0] = fibo[1];
		fibo[1] = item;
	}
}

//30.质素求和算法
//求小于等于给定数值的质数之和。
//只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
//给定的数不一定是质数。
//例如：sumPrimes(10) -> 17 1,2,3,5,7
function sumPrimes(num) {
	var arr = [];
	for(var i = 2; i <= num; i++) {
		var bool = true;
		for(var j = 2; j < i; j++) {
			if(!(i % j)) {
				bool = false;
				break;
			}
		}
		if(bool) arr.push(i);
	}
	return arr.reduce(function(a, b) {
		return a + b
	});
}

//31.最小公倍数算法
//找到所提供参数的最小公倍数，这两个参数可以均匀分配，以及这些参数之间范围内的所有最小公倍数。
//范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
//例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
//例如：smallestCommons([1, 5]) -> 60
//法1：
function smallestCommons(arr) {
	var _arr = [],
		m = [],
		n = 2,
		max = Math.max(arr[0], arr[1]),
		min = Math.min(arr[0], arr[1]);
	for(var i = min; i <= max; i++) {
		m.push(i);
	}
	while(true) {
		for(var i = 0; i < m.length; i++) {
			if(m[i] % n == 0) {
				for(var j = 0; j < m.length; j++) {
					if(m[j] % n == 0) m[j] = m[j] / n
				}
				m[i] = m[i] / n;
				_arr.push(n);
			}
		}
		m = [].filter.call(m, function(n) {
			if(n > 1) return n;
		})
		n++;
		if(m.length == 0)
			return _arr.reduce(function(a, b) {
				return a * b
			});
	}
}
//法2：
function smallestCommons2(arr) {
	/*
	 *此算法的思路是，先将传入的数组排序并补全，然后用数组的最后一项依次除以数组的其它各项，如果不能整
	 *除则给最后一项加上原来数组的最后一项的值，重新进行前面的判断，直到数组中所有项均可被整除，即可
	 *得到传入数组中所包含的数的最小公倍数
	 */
	//对数组排序
	arr.sort(function(a, b) {
		return a - b;
	});
	//补全数组
	var arrLast = arr[arr.length - 1];
	for(var j = 1; j < arrLast - arr[0]; j++) {
		arr.splice(j, 0, arr[0] + j);
	}
	var k = 0;
	var num = arr[arr.length - 1];
	while(k === 0) {
		for(var i = 0; i < arr.length - 1; i++) {
			//判断数组中从第一个数起至倒数第二个数，能否被最后一个数整除，若不能则跳出内部循环
			if(num % arr[i] !== 0) {
				break;
			}
			//如果这个数可以被整除，而且这个数是数组的倒数第二个数时，结束外部循环
			else if(i == arr.length - 2) {
				k = 1;
			}
		}
		//不能整除时，给num加上数组的最后一项的值
		num += arr[arr.length - 1];
	}
	return num - arr[arr.length - 1];
}

//32.数组验证算法
//写一个 function，它查找数组（第一个参数）并返回数组中第一个通过某种方法（第二个参数）验证的元素。
//例如：find([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) -> 8
//法1：
function find(arr, func) {
	return [].filter.call(arr, function(n) {
		return func(n)
	})[0];
}
//法2：
function find2(arr, func) {
	return arr.filter(func)[0];
}

//33.数组取值算法
//删除数组(第一个参数)的元素，从左边开始，直到回调函数（第二个参数）return true就停止。
//第二个参数，func，是一个函数。用来测试数组的第一个元素，如果返回fasle，就从数组中抛出该元素(注意：此时数组已被改变)，继续测试数组的第一个元素，如果返回fasle，继续抛出，直到返回true。
//最后返回数组的剩余部分，如果没有剩余，就返回一个空数组。
//例如：drop([1, 2, 3, 4], function(n) {return n >= 3;}) -> [3, 4]
//法1：
function drop(arr, func) {
	var _arr = arr;
	for(var i = 0; i < _arr.length; i++) {
		if(!func(_arr[i])) {
			arr.shift();
			i--
		} else return arr;
	}
	return [];
}
//法2：
function drop2(arr, func) {
	var i = 0;
	do {
		for(; i < arr.length; i++) {
			//遍历数组，若不满足回调函数，则将该项从数组中删除
			if(!func.call(func, arr[i])) {
				//执行splice后数组长度减少1
				arr.splice(i, 1);
				break;
			}
		}
	}
	//判断减少一项后数组的第i项（即原数组中的第i+1项）是否满足回调函数，若不满足则继续循环，直到满足为止
	while (!func.call(func, arr[i]));
	return arr;
}

//34.数组平铺算法
//对嵌套的数组进行平铺嵌套数组。你必须考虑到不同层级的嵌套。
//例如：steamroller([[["a"]], [["b"]]]) -> ["a", "b"]
function steamroller(arr) {
	var _arr = [];
	for(var i = 0; i < arr.length; i++) {
		if(!Array.isArray(arr[i])) {
			_arr.push(arr[i])
		} else {
			_arr = _arr.concat(steamroller(arr[i]))
		}
	}
	return _arr;
}

//35.二进制转字符算法
//传入二进制字符串，翻译成英语句子并返回。
//二进制字符串是以空格分隔的。
//例如：binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111") -> "Aren't bonfires fun!?"
function binaryAgent(str) {
	var arr = [];
	for(var i = 0; i < str.split(' ').length; i++) {
		arr.push(String.fromCharCode(parseInt(str.split(' ')[i], 2)))
	}
	return arr.join('');
}

//36.数组元素判断算法
//所有的东西都是真的！
//完善编辑器中的every函数，如果集合(collection)中的所有对象都存在对应的属性(第二个参数)，并且属性(第二个参数)对应的值为真。函数返回ture。反之，返回false。
//记住：您可以通过点符号或[]符号来访问对象属性。
//提示：Array.prototype.every()。
//例如：every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") -> true
//法1：
function every(collection, pre) {
	return [].every.call(collection, function(item) {
		var bool = false;
		if(item.hasOwnProperty(pre)) {
			if(item[pre]) bool = true;
		}
		return bool;
	});
}
//法2：
function every2(collection, pre) {
	return collection.every(function(obj) {
		return obj[pre];
	});
}

//37.函数迭代可选参数算法
//创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
//例如，add(2, 3) 应该返回 5，而 add(2) 应该返回一个 function。
//调用这个有一个参数的返回的 function，返回求和的结果：
//例如：var sumTwoAnd = add(2); sumTwoAnd(3) -> 5
//如果两个参数都不是有效的数字，则返回 undefined。
function add() {
	if(arguments.length == 1 && typeof arguments[0] == "number") {
		var a = arguments[0];
		return function(b) {
			if(typeof b == "number")
				return a + b;
		}
	} else if(typeof arguments[0] == "number" && typeof arguments[1] == "number") {
		return [].reduce.call(arguments, function(a, b) {
			return a + b;
		});
	}
	return undefined;
}

/***************************************************************/
//38.判断电话号码算法
//如果传入字符串是一个有效的美国电话号码，则返回 true.
//用户可以在表单中填入一个任意有效美国电话号码. 下面是一些有效号码的例子(还有下面测试时用到的一些变体写法):
//555-555-5555
//(555)555-5555
//(555) 555-5555
//555 555 5555
//5555555555
//1 555 555 5555
//验证前面给出的字符串是否是有效的美国电话号码. 区号是必须有的. 
//如果字符串中给出了国家代码, 你必须验证其是 1.如果号码有效就返回 true ; 否则返回 false.
//例如：telephoneCheck("5555555555") -> true
function telephoneCheck(str) {
	var reg = /^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
	var res = reg.test(str);
	return res;
}

//39.集合交集算法
//创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
//给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 
//而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 
//对于传入的额外集合 (如 D = {2, 3}), 你应该安装前面原则求前两个集合的结果与新集合的对等差分集合 (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
//例如：sym([1, 2, 3], [5, 2, 1, 4]) -> [3, 4, 5]
function sym() {
	var args = Array.from(arguments);
	args = args.reduce(function(prev, curv, index, array) {
		var a = prev.filter(function(item) {
			return curv.indexOf(item) < 0;
		});
		var b = curv.filter(function(item) {
			return prev.indexOf(item) < 0;
		});
		return a.concat(b);
	});
	return args.filter(function(item, index, array) {
		return array.indexOf(item) == index;
	});
}

//40.收银系统算法
//设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数.cid 是一个二维数组，存着当前可用的找零.
//当收银机中的钱不够找零时返回字符串 "Insufficient Funds". 如果正好则返回字符串 "Closed".否则, 返回应找回的零钱列表,且由大到小存在二维数组中.
//例如：checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) -> "Insufficient Funds"
function checkCashRegister(price, cash, cid) {
	var change;
	var base = 100;
	change = (cash - price) * base;
	//定义一个函数，用来求零钱和。
	var getTotalMoney = function(arr) {
		var s = arr.reduce(function(preV, currV, currIndex, array) {
			return preV + currV[1];
		}, 0);
		return base * s;
	};
	var remain = getTotalMoney(cid);
	var baseDollarObj = {
		"PENNY": 1,
		"NICKEL": 5,
		"DIME": 10,
		"QUARTER": 25,
		"ONE": 100,
		"FIVE": 500,
		"TEN": 1000,
		"TWENTY": 2000,
		"ONE HUNDRED": 10000
	};
	var changeArr = [];
	var currLast = 0; // 当前面值所剩余额
	var currMoney = 0; //当前金钱面额
	var currtotal = 0; //当前零钱可找总额
	for(var i = cid.length - 1; i >= 0; i--) {
		//当前面值剩余金额		
		currLast = cid[i][1] * base;
		if(currLast <= 0) {
			continue; //当前面值的金额剩余0，跳过
		}
		currMoney = baseDollarObj[cid[i][0]];
		if(change > currMoney) { //如果当前金额面值小于应找钱数          
			if(change < currLast) {
				currtotal = currMoney * Math.floor(change / currMoney);
			} else {
				currtotal = currLast;
			}
			change -= currtotal; //取完之后从应找余额中减去（张数x面值） 
			changeArr.push([cid[i][0], currtotal / base]);
		}
	}
	if(change > 0) {
		//找不开的面值
		return "Insufficient Funds";
	} else if(change === 0 && ((cash - price) * base == remain)) {
		//如果零钱数等于应找数额并且可找出来
		return "Closed";
	} else {
		return changeArr;
	}
}

//41.库存更新算法
//依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
//例如：updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []) 
//->[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]
function updateInventory(arr1, arr2) {
	arr1 = arr1.filter(function(a) {
		var bool = true;
		for(var i = 0; i < arr2.length; i++) {
			if(arr2[i][1] == a[1]) {
				arr2[i][0] = a[0] + arr2[i][0]
				var bool = false;
				break;
			}
		}
		return bool
	})
	return arr1.concat(arr2).sort(function(a, b) {
		return a[1].charCodeAt(0) - b[1].charCodeAt(0)
	});
}

//42.排列组合去重算法
//把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
//例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符 (在本例中是 a).
//例如：permAlone("aab") -> 2.
//思路：全排列recoper函数：对于每一个输入的str，我们把它分为两部分，第一部分为字符串的第一个字母，定义为left，第二部分为剩余的字符串，定义为rest。返回str的全排列数组。递归思路：递归recoper。
function permAlone(str) {
	var perarr = [];
	//创建正则，如果字符串全重复，则直接return 0
	var reg = /(.)\1+/g;
	if(str.match(reg) !== null && str.match(reg)[0] === str) {
		return 0;
	}

	function recoper(str) {
		var arr = []; //存放str的全排列
		if(str.length > 1) {
			var left = str[0];
			var rest = str.slice(1, str.length);
			//获取rest字符串的全排列
			var perRes = recoper(rest);
			var pl = perRes.length,
				pil, s;
			for(var i = 0; i < pl; i++) {
				s = perRes[i];
				pil = perRes[i].length;
				for(var j = 0; j <= pil; j++) {
					var tmp = s.substring(0, j) + left + s.substring(j, pl);
					arr.push(tmp);
				}
			}
		} else if(str.length == 1) {
			arr = [str];
		}
		return arr;
	}
	perarr = recoper(str);
	//返回相邻不重复的数量
	return perarr.filter(function(val) {
		return !val.match(reg);
	}).length;
}

//43.日期改写算法
//把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。
//易读格式应该是用月份名称代替月份数字，用序数词代替数字来表示天 (1st 代替 1).
//记住不要显示那些可以被推测出来的信息: 如果一个日期区间里结束日期与开始日期相差小于一年，则结束日期就不用写年份了。月份开始和结束日期如果在同一个月，则结束日期月份就不用写了。
//另外, 如果开始日期年份是当前年份，且结束日期与开始日期小于一年，则开始日期的年份也不用写。
//例如：makeFriendlyDates(["2016-07-01", "2016-07-04"]) -> ["July 1st, 2016","4th"]
//法1：
function makeFriendlyDates(arr) {
	var dateArr = ["", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
			"11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th",
			"21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th",
			"31st"
		],
		monthArr = ["", "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
		],
		resarr = [];
	var caldate = function(startTime, endTime) {
		startTime = startTime.replace(/-/g, "/");
		endTime = endTime.replace(/-/g, "/");
		var newa = new Date(startTime);
		newa.setFullYear(newa.getFullYear() + 1);
		newa = newa.getTime();
		var newb = new Date(endTime).getTime();
		if(newa <= newb) {
			return true;
		} else {
			return false;
		}
	};
	var a = arr[0].replace(/-0?/g, " ").split(" "),
		b = arr[1].replace(/-0?/g, " ").split(" "),
		nowYear = new Date().getFullYear();
	var str1 = monthArr[a[1]] + " " + dateArr[a[2]],
		str2 = dateArr[b[2]];

	var morethanoneyear = caldate(arr[0], arr[1]);

	if(!morethanoneyear) {
		if(a[0] != nowYear) {
			//开始日期年份不是当前年份
			str1 = str1 + ", " + a[0];
		}

		if((a[0] === b[0]) && (a[1] === b[1]) && (a[2] === b[2])) {
			//同年同月同日
			str2 = "";
		} else if(parseInt(a[0]) > parseInt(b[0])) {
			str1 = "";
			str2 = "";
		} else if(!((a[1] === b[1]) && (parseInt(a[2]) < parseInt(b[2])))) {
			str2 = monthArr[b[1]] + " " + str2;
		}

	} else {
		//相差超过一年
		str1 = str1 + ", " + a[0];
		str2 = monthArr[b[1]] + " " + str2 + ", " + b[0];
	}

	if(str2 !== "" && str1 !== "") {
		resarr.push(str1, str2);
	} else if(str1 !== "" && str2 === "") {
		resarr.push(str1);
	} else {
		resarr = null;
	}
	return resarr;
}
//法2：
function makeFriendlyDates2(arr) {
	//获得目前的年份
	var yearnow = (new Date()).getFullYear();
	//把传入的参数放入字符串数组，创建Date类型也可以
	var date1 = arr[0].split("-");
	var date2 = arr[1].split("-");
	//月份的英文表示
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	//初始化几个后面用到的数组
	var date1str = "";
	var date2str = "";
	var datearr = [];
	//给日期加后缀的函数
	function friendlydate(str) {
		var str2num = Number(str);
		switch(str2num) {
			case 1:
				str2num += "st";
				break;
			case 2:
				str2num += "nd";
				break;
			case 3:
				str2num += "rd";
				break;
			default:
				str2num += "th";
		}
		return str2num;
	}
	//date1的字符串表示大部分情况下都是需要年月日的。date2的如果不是在同年同月，大部分情况下都是需要月日的
	date1str = months[date1[1] - 1] + " " + friendlydate(date1[2]) + ", " + date1[0];
	if(date1[1] === date2[1] && date1[0] === date2[0]) {
		date2str = friendlydate(date2[2]);
	} else {
		date2str = months[date2[1] - 1] + " " + friendlydate(date2[2]);
	}
	//如果大于一年，date2加上年份；如果小于一年，而且date1的日期是今年，那么去掉date1的年份。
	if((date2[0] - date1[0] > 1) || ((date2[0] - date1[0] === 1) && (date2[1] - date1[1] > 0)) || ((date2[0] - date1[0] === 1) && (date2[1] - date1[1] === 0) && date2[2] - date1[2] >= 0)) {
		date2str += ", " + date2[0];
	} else if(date1[0] == yearnow) {
		date1str = date1str.slice(0, -6);
	}
	//把两个日期放在同一个数组里输出（如果是同年同月同日，代码里的date2str无用，所以代码是可以改善的）。
	datearr[datearr.length] = date1str;
	if(date1.toString() !== date2.toString()) {
		datearr[datearr.length] = date2str;
	}
	return datearr;
}
//法3
var makeFriendlyDates3 = (function() {
	var mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var nth = ["st", "nd", "rd", "th"];
	var now_year = new Date().getFullYear(); //以上皆为缓存

	function num(x, max) { //处理数字
		x = (x < max) ? x : max;
		return --x;
	}

	function judge(str1, str2) { //判断两个时间戳是否小于一年
		var cha = new Date(str2) - new Date(str1);
		if(cha / 1000 / 3600 / 24 < 365) {
			return true;
		} else {
			return false;
		}
	}

	return function(arr) {
		var res = [];
		var time_start = arr[0].split("-");
		var time_end = arr[1].split("-");

		var end_year = (judge(arr[0], arr[1])) ? "" : ", " + time_end[0];
		var end_mounth = (time_start[0] == time_end[0] && time_end[1] == time_start[1]) ? "" : mounth[time_end[1] - 1] + " ";
		var end_day = parseInt(time_end[2]);

		if(arr[0] == arr[1]) { //结束时间和开始时间一样的话
			return [mounth[time_end[1] - 1] + " " + end_day + nth[num(end_day, 4)] + ", " + time_end[0]];
		}

		var start_year = (judge(arr[0], arr[1]) && time_start[0] == now_year) ? "" : ", " + time_start[0];
		var start_mounth = mounth[time_start[1] - 1] + " ";
		var start_day = parseInt(time_start[2]);

		var res_start = start_mounth + start_day + nth[num(start_day, 4)] + start_year;
		res.push(res_start);
		var res_end = end_mounth + end_day + nth[num(end_day, 4)] + end_year;
		res.push(res_end);

		return res;
	};
})();

//44.类及对象构建算法
//用下面给定的方法构造一个对象.
//方法有 getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).
//所有有参数的方法只接受一个字符串参数.
//所有的方法只与实体对象交互.
//法1：
var Person = (function() {
	var Person = function(name) {
		this.name = name;
		this.init()
	}
	Person.prototype = {
		init: function() {
			this.first = this.name.split(' ')[0];
			this.last = this.name.split(' ')[1];
		},
		getFirstName: function() {
			return this.first;
		},
		getLastName: function() {
			return this.last;
		},
		getFullName: function() {
			return this.name;
		},
		setFirstName: function(first) {
			this.first = first;
			this.setFullName(first + " " + this.last)
			return this.first;
		},
		setLastName: function(last) {
			this.last = last;
			this.setFullName(this.first + " " + last)
			return this.last;
		},
		setFullName: function(firstAndLast) {
			this.name = firstAndLast;
			this.init();
			return this.name;
		}
	}
	return Person;
})();
//法2：
var Person2 = function(firstAndLast) {
	var firstAndLastarr = firstAndLast.split(" "),
		firstName = firstAndLastarr[0],
		lastName = firstAndLastarr[1];

	this.getFirstName = function() {
		return firstName;
	}
	this.getLastName = function() {
		return lastName;
	}
	this.getFullName = function() {
		firstAndLastarr[0] = firstName;
		firstAndLastarr[1] = lastName;
		return firstAndLastarr.join(" ");
	}
	this.setFirstName = function(first) {
		firstName = first;
	}
	this.setLastName = function(last) {
		lastName = last
	}
	this.setFullName = function(firstAndLast) {
		firstAndLastarr = firstAndLast.split(" ");
		firstName = firstAndLastarr[0];
		lastName = firstAndLastarr[1];
	}
};

//45.轨道周期算法
//返回一个数组，其内容是把原数组中对应元素的平均海拔转换成其对应的轨道周期.
//原数组中会包含格式化的对象内容，像这样 {name: 'name',avgAlt: avgAlt}.
//至于轨道周期怎么求， https://en.wikipedia.org/wiki/Orbital_period 
//(不想看英文的话可以自行搜索以轨道高度计算轨道周期的公式).
//求得的值应该是一个与其最接近的整数，轨道是以地球为基准的.
//地球半径是 6367.4447 kilometers, 地球的GM值是 398600.4418, 圆周率为Math.PI
//例如：orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
//->[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
function orbitalPeriod(arr) {
	var GM = 398600.4418;
	var earthRadius = 6367.4447;
	for(var i = 0; i < arr.length; i++) {
		var R = arr[i].avgAlt + earthRadius;
		var T = 2 * Math.PI * Math.sqrt((Math.pow(R, 3) / GM));
		delete arr[i].avgAlt;
		arr[i].orbitalPeriod = Math.round(T)
	}
	return arr;
}

//46.数据组合求值算法
//举个例子：有一个数组[7,9,11,13,15]，按照最佳组合值为20来计算，只有7+13和9+11两种组合。而7在数组的索引为0，13在数组的索引为3，9在数组的索引为1，11在数组的索引为2。
//所以我们说函数：pairwise([7,9,11,13,15],20) 的返回值应该是0+3+1+2的和，即6。
//例如：pairwise([1, 4, 2, 3, 0, 5], 7) -> 11
//法1：
function pairwise(arr, arg) {
	var a = arr.reduce(function(prev, currv, index, array) {
		var l = array.length;
		for(var i = index + 1; i < l; i++) {
			if(array[index] + array[i] === arg) {
				arr[index] = "false";
				arr[i] = "false";
				return prev + i + index;
			}
		}
		return prev;
	}, 0);
	return a;
}
//法2：
function pairwise2(arr, arg) {
	var l = arr.length,
		res = 0;
	for(var i = 0; i < l; i++) {
		for(var j = i + 1; j < l; j++) {
			if(arr[i] + arr[j] === arg) {
				res = res + i + j;
				arr[i] = "false";
				arr[j] = "false";
			}
		}
	}
	return res;
}
/**************************************************