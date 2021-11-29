const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
async function example() { // To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

    // To fetch fundoonotes from the browser with our code.
    await driver.get("http://localhost:3000/");

   
    //to login a user
    await driver.findElement(By.name("email")).sendKeys
    ("shravyamaradithaya@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("Shravani3*");
    await driver.findElement(By.id("login-Button")).click();
    await sleep(1000)
    driver.navigate("http://localhost:3000/dashboard").refresh();
    await sleep(5000)
    // //Verify the page title and print it
    var title = await driver.getTitle();
    console.log('Title is:', title);

    // It is always a safe practice to quit the browser after execution
    await driver.quit();

}

example()
