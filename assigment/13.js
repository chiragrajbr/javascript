//to print only even numbers in given array
a=[2,4,12,15,16,13,7,]
for(i=0;i<=16;i++)
{if(a[i]%2==0){
    console.log(a[i],"is a prime number")
}}

i=0
while(i<=a.length){
    if(a[i]%2==0){
    console.log(a[i],"is a prime number")}i++

}

i=0
do{
    if(a[i]%2==0){
        console.log(a[i],"is a even number")
    }
    i++
}
while(i<=a.length)