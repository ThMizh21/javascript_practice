let n = 3;

for (let i = 1; i <= n; i++) {
    let a = '';

    for (let j = 1; j <= n - i; j++) {
        a += ' ';
    }

    for (let k = 1; k <= i; k++) {
        a += '*';
    }

    console.log(a);
}


    // let n = 3;

    // for (let i = 1; i <= n; i++) {
    //     let a = '';

        
    //     for (let j = 1; j <= n - i; j++) {
    //         a += ' ';
    //     }

    //     for (let k = 1; k <= i; k++) {
    //         a += '*'; 
        
    //     }

    //     console.log(a);
    // }