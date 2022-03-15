export function aaa(){
    var count = 1;
 
    function counter() {
        // 実行する処理
        console.log(count);
        count += 1;
    
        // 3秒後にcounter() を実行
        setTimeout(counter, 3000)
    }
}