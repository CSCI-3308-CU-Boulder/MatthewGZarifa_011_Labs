#!/bin/bash
# Author : Matthew Zarifa
# Date: 2/3/2021
# Script follows here:
echo "Enter a number: "
read numOne
echo "Enter a second number: "
read numTwo
sum=$(($numOne + $numTwo))
echo "The sum is : $sum"
let prod=numOne*numTwo
echo "The product is: $prod"
echo "Command Line Argument 1: $1"
grep $1 $2
