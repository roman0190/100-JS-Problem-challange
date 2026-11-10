// Batch 0006-0055: 50 general JavaScript practice problems.
const solutions = {
sumArray:a=>a.reduce((s,n)=>s+n,0),findMaximum:a=>a.length?Math.max(...a):null,findMinimum:a=>a.length?Math.min(...a):null,average:a=>a.length?a.reduce((s,n)=>s+n,0)/a.length:null,
reverseString:s=>[...s].reverse().join(""),countWords:s=>(s.trim().match(/\S+/g)||[]).length,capitalizeWords:s=>s.replace(/\b\w/g,c=>c.toUpperCase()),characterFrequency:s=>[...s].reduce((m,c)=>(m[c]=(m[c]||0)+1,m),{}),
firstUniqueCharacter:s=>[...s].find(c=>s.indexOf(c)===s.lastIndexOf(c))??null,areAnagrams:(a,b)=>[...a.toLowerCase().replace(/\s/g,"")].sort().join("")===[...b.toLowerCase().replace(/\s/g,"")].sort().join(""),
removeWhitespace:s=>s.replace(/\s/g,""),truncateString:(s,n)=>s.length<=n?s:s.slice(0,n),titleCase:s=>s.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()),flattenArray:a=>a.flat(Infinity),
chunkArray:(a,size)=>{if(!Number.isInteger(size)||size<=0)throw new RangeError("size must be positive");const o=[];for(let i=0;i<a.length;i+=size)o.push(a.slice(i,i+size));return o;},
rotateArray:(a,k)=>{if(!a.length)return[];const n=((k%a.length)+a.length)%a.length;return a.slice(-n).concat(a.slice(0,-n));},secondLargest:a=>[...new Set(a)].sort((x,y)=>y-x)[1]??null,uniqueValues:a=>[...new Set(a)],
arrayIntersection:(a,b)=>[...new Set(a.filter(x=>b.includes(x)))],arrayDifference:(a,b)=>a.filter(x=>!b.includes(x)),pairSumExists:(a,t)=>{const s=new Set();for(const n of a){if(s.has(t-n))return true;s.add(n)}return false;},
mergeSortedArrays:(a,b)=>{const o=[];let i=0,j=0;while(i<a.length&&j<b.length)o.push(a[i]<=b[j]?a[i++]:b[j++]);return o.concat(a.slice(i),b.slice(j));},
binarySearch:(a,t)=>{let l=0,r=a.length-1;while(l<=r){const m=(l+r)>>1;if(a[m]===t)return m;if(a[m]<t)l=m+1;else r=m-1}return-1;},linearSearch:(a,t)=>a.indexOf(t),
bubbleSort:a=>{const r=a.slice();for(let i=0;i<r.length;i++)for(let j=0;j<r.length-i-1;j++)if(r[j]>r[j+1])[r[j],r[j+1]]=[r[j+1],r[j]];return r;},
insertionSort:a=>{const r=a.slice();for(let i=1;i<r.length;i++){const x=r[i];let j=i-1;while(j>=0&&r[j]>x)r[j+1]=r[j--];r[j+1]=x}return r;},
selectionSort:a=>{const r=a.slice();for(let i=0;i<r.length;i++){let m=i;for(let j=i+1;j<r.length;j++)if(r[j]<r[m])m=j;[r[i],r[m]]=[r[m],r[i]]}return r;},
isPrime:n=>{if(n<2||!Number.isInteger(n))return false;for(let i=2;i*i<=n;i++)if(n%i===0)return false;return true;},
primesUpTo:n=>{const o=[];for(let x=2;x<=n;x++){let p=true;for(let d=2;d*d<=x;d++)if(x%d===0){p=false;break}if(p)o.push(x)}return o;},
gcd:(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b)[a,b]=[b,a%b];return a;},lcm:(a,b)=>(!a||!b)?0:Math.abs(a*b)/solutions.gcd(a,b),
fibonacci:n=>{if(!Number.isInteger(n)||n<0)throw new RangeError("n must be non-negative");let a=0,b=1;for(let i=0;i<n;i++)[a,b]=[b,a+b];return a;},
factorial:n=>{if(!Number.isInteger(n)||n<0)throw new RangeError("n must be non-negative");let r=1;for(let i=2;i<=n;i++)r*=i;return r;},
sumDigits:n=>Math.abs(n).toString().split("").reduce((s,d)=>s+Number(d),0),reverseInteger:n=>Math.sign(n)*Number(Math.abs(n).toString().split("").reverse().join("")),
isArmstrong:n=>{const d=String(n).split("").map(Number),p=d.length;return n>=0&&d.reduce((s,x)=>s+x**p,0)===n;},
isPerfectNumber:n=>{if(n<=1)return false;let s=1;for(let i=2;i*i<=n;i++)if(n%i===0)s+=i+(i*i===n?0:n/i);return s===n;},
decimalToBinary:n=>{if(!Number.isInteger(n)||n<0)throw new RangeError("n must be non-negative");return n.toString(2);},
countSetBits:n=>{let c=0;while(n){c+=n&1;n>>>=1}return c;},power:(b,e)=>b**e,isPowerOfTwo:n=>n>0&&(n&(n-1))===0,
celsiusToFahrenheit:c=>c*9/5+32,fahrenheitToCelsius:f=>(f-32)*5/9,
daysBetween:(a,b)=>Math.abs(Date.UTC(new Date(a).getUTCFullYear(),new Date(a).getUTCMonth(),new Date(a).getUTCDate())-Date.UTC(new Date(b).getUTCFullYear(),new Date(b).getUTCMonth(),new Date(b).getUTCDate()))/86400000,
isValidEmail:s=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s),countOccurrences:(a,x)=>a.filter(v=>v===x).length,
mostFrequent:a=>{if(!a.length)return null;const m=new Map();for(const x of a)m.set(x,(m.get(x)||0)+1);return[...m].sort((x,y)=>y[1]-x[1])[0][0];},
groupBy:(a,f)=>a.reduce((m,x)=>{const k=f(x);(m[k]??=[]).push(x);return m;},{}),deepCloneJSON:v=>JSON.parse(JSON.stringify(v)),
memoize:fn=>{const c=new Map();return(...a)=>{const k=JSON.stringify(a);if(!c.has(k))c.set(k,fn(...a));return c.get(k)};},
compose:(...f)=>x=>f.reduceRight((v,fn)=>fn(v),x),debounce:(fn,wait)=>{let timer;return(...a)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...a),wait)};},
isBalancedBrackets:s=>{const st=[],p={")":"(","]":"[","}":"{"};for(const c of s){if("([{".includes(c))st.push(c);else if(p[c]&&st.pop()!==p[c])return false;}return st.length===0;}
};
const assert=require("node:assert/strict");
const tests=[
[solutions.sumArray([1,2,3]),6],[solutions.findMaximum([1,9,3]),9],[solutions.findMinimum([1,9,3]),1],[solutions.average([2,4,6]),4],
[solutions.reverseString("hello"),"olleh"],[solutions.countWords("one two  three"),3],[solutions.capitalizeWords("hello world"),"Hello World"],[solutions.characterFrequency("aba"),{a:2,b:1}],
[solutions.firstUniqueCharacter("swiss"),"w"],[solutions.areAnagrams("Dormitory","Dirty room"),true],[solutions.removeWhitespace("a b\nc"),"abc"],[solutions.truncateString("abcdef",3),"abc"],
[solutions.titleCase("hELLO world"),"Hello World"],[solutions.flattenArray([1,[2,[3]]]),[1,2,3]],[solutions.chunkArray([1,2,3,4,5],2),[[1,2],[3,4],[5]]],
[solutions.rotateArray([1,2,3,4],1),[4,1,2,3]],[solutions.secondLargest([4,1,4,3]),3],[solutions.uniqueValues([1,1,2]),[1,2]],
[solutions.arrayIntersection([1,2,2],[2,3]),[2]],[solutions.arrayDifference([1,2,3],[2]),[1,3]],[solutions.pairSumExists([2,7,11],9),true],
[solutions.mergeSortedArrays([1,3],[2,4]),[1,2,3,4]],[solutions.binarySearch([1,3,5],3),1],[solutions.linearSearch([4,5],5),1],
[solutions.bubbleSort([3,1,2]),[1,2,3]],[solutions.insertionSort([3,1,2]),[1,2,3]],[solutions.selectionSort([3,1,2]),[1,2,3]],
[solutions.isPrime(17),true],[solutions.primesUpTo(10),[2,3,5,7]],[solutions.gcd(18,24),6],[solutions.lcm(4,6),12],
[solutions.fibonacci(8),21],[solutions.factorial(5),120],[solutions.sumDigits(-123),6],[solutions.reverseInteger(-120),-21],
[solutions.isArmstrong(153),true],[solutions.isPerfectNumber(28),true],[solutions.decimalToBinary(10),"1010"],[solutions.countSetBits(11),3],
[solutions.power(2,5),32],[solutions.isPowerOfTwo(16),true],[solutions.celsiusToFahrenheit(0),32],[solutions.fahrenheitToCelsius(32),0],
[solutions.daysBetween("2024-01-01","2024-01-04"),3],[solutions.isValidEmail("a@b.com"),true],[solutions.countOccurrences([1,2,1],1),2],
[solutions.mostFrequent([1,2,2,3]),2],[solutions.groupBy([1,2,3,4],x=>x%2),{"0":[2,4],"1":[1,3]}],
[solutions.deepCloneJSON({a:[1]}),{a:[1]}],[solutions.memoize(x=>x*x)(4),16],[solutions.compose(x=>x+1,x=>x*2)(3),7],
[solutions.isBalancedBrackets("{[()]}"),true]
];
for(let i=0;i<tests.length;i++)assert.deepStrictEqual(tests[i][0],tests[i][1],`General problem ${i+6}`);
console.log("General JS: "+tests.length+" tests passed");module.exports=solutions;