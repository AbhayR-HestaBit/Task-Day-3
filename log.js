function parseLine(line){return line.trim()}
function isError(line){return line.includes("ERROR")}
function countErrors(lines){
let c=0
for(const l of lines)if(isError(l))c++
return c
}
