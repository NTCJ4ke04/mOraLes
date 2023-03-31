/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_beadle, _buddy, _handle, _scholar) {
    const NFT = {
        "Beadle":  _beadle,
        "Buddy": _buddy,
        "Handle": _handle,
        "Scholar": _scholar
    }
    NFTs.push (NFT);
    console.log ("Minted: " + _beadle);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for(let i = 0; i < NFTs.length; i++){
        console.log("\nID \t\t\t\t" + (i + 1));
        console.log("\nBeadle: \t" + NFTs[i].Beadle);
        console.log("Buddy: \t\t" + NFTs[i].Buddy);
        console.log("Handle: \t" + NFTs[i].Handle);
        console.log("Scholar: \t" + NFTs[i].Scholar);

        
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT ("Jake", "Keiran", "David", "Scholar");
mintNFT ("James", "Michael", "Wilson", "SCholar");
mintNFT ("John", "Jophet", "Renzo", "Scholar");
listNFTs();
getTotalSupply();
