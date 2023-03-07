const str = `
010-1234-5678
hada789@gmail.com
https://brunch.co.kr/
hihihiihihitheThe
abbcccddddggg
`

console.log(
    str.match(/(?<=@).{1,}/g)
)