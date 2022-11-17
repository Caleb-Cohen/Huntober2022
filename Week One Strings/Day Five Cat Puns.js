function catPunsFilter(string){
  let arr = string.split(",")
  let forbiddenList = ["dog", "bark", "bone"]
  let lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("")
  let upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  return arr.filter(ele => ele === ele.trim())
            .filter(ele => !ele.toLowerCase().includes("dog"))
            .filter(ele => !ele.toLowerCase().includes("bark"))
            .filter(ele => !ele.toLowerCase().includes("bone"))
            .filter(ele => ele.length % 5 != 0)
            .filter(ele => (ele.charCodeAt(0) + ele.charCodeAt(ele.length-1)) % 2 != 0)
            .filter(ele => ele[Math.ceil(ele.length/2)] != "e")
            .filter(ele => !ele.includes("S"))
            .filter((ele) => {
            let sum = 0;
            let eleArr = ele.split("")
            for(let e of eleArr){
              if(e === e.toLowerCase() && lowerCaseLetters.includes(e)){
               sum++ 
              }
            }
              if(sum % 2 === 0){
                return ele
              }
  })
            .filter((ele) => {
            let capitalLetterCount = 0;
            let eleArr = ele.split("")
            for(let e of eleArr){
              if(e === e.toUpperCase() && upperCaseLetters.includes(e)){
               capitalLetterCount++ 
              }
            }
              if(capitalLetterCount >= 2){
                return ele
              }
  })
}

catPunsFilter("The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood")