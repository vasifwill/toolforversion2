import React from 'react'


function square (n){
    let prevValues={}
    if(prevValues[n] != null) { //memoziation
        return prevValues[n]
    }
    let result = 0

    for (let i = 0; i < n.length; i++) {
        for (let j = 0; j < n.length; j++) {
            result+=1
       
        }
        
    }
    prevValues[n] = result //memoziation
    return result
}