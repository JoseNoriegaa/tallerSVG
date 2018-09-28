var data = {
    title : "Market share of desktop browsers in the United States",
    source : {
        company : "statista",
        url : "https://www.statista.com/statistics/272697/market-share-desktop-internet-browser-usa/",
        month : "April 2018" 
    },
    results : [
        {
            browser : {
                name : "Google Chrome",
                color : '#1BA261'
            },
            value : 59.71
        },
        {
            browser : {
                name : "Internet Explorer",
                color : '#006FC9'
            },
            value : 11.14
        },
        {
            browser :  {
                name : "Mozilla Firefox",
                color : '#FF7F06'
            },
            value : 10.73
        },
        {
            browser : {
                name : "Apple Safari",
                color : '#00C0DF'
            },
            value : 9.15
        },
        {
            browser : {
                name : "Microsoft Edge",
                color : '#BA3FE3'
            },
            value : 7.56
        },
        {
            browser : {
                name : "Opera",
                color : '#FF1B2D'
            },
            value : 0.87
        }
    ]
};

function init() {
    console.log('Initializing page...');
    drawSlice(20);
    drawSlice(40);
    drawSlice(60);
    drawSlice(80);
}
/**
 * 
 * @param {Number} p porcentaje de pieza
 * @param {Number} cx origen x
 * @param {Number} cy origen y
 * @param {Number} r radio
 */
const drawSlice = (p = 20, cx = 200, cy = 200, r = 150) => {
    const x = cx + (Math.sin((Math.PI / 180) * (p * 3.6)) * r);
    const y = cy - (Math.cos((Math.PI / 180) * (p * 3.6)) * r);
    console.log("==================");
    console.log(x);
    console.log(y);
    console.log("==================");
    return {x, y};
};
