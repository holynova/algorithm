const log = console.log.bind(console);
function change(coins, amount) {

    function find(n) {
        if (n === 0) {
            return 1
        } else if (n < 0) {
            return 0
        } else {
            for (let coin of coins) {
                find(n - coin) + 1
            }
        }
    }

}


function test() {
    const coins = [1, 2, 5]
    const amount = 11
    log(change(coins, amount))
}
test()