var person, infected, recovered
var evenMore
var grey, red, green
var edges
var group1
var group2
var group3
var gameState = 1
var wall1, wall2, wall3, wall4
var rand
function preload() {
    grey = loadImage("Grey.png")
    red = loadImage("Circle.png")
    green = loadImage("Green.png")

}

function setup() {
    createCanvas(1200, 600)
    group1 = new Group()
    group2 = new Group()
    group3 = new Group()
    edges = createEdgeSprites()
  
    // comment
    if (gameState === 1) {
        for (var i = 40; i < 1200; i = i + 100) {
            for (var e = 20; e < 400; e += 80) {
                person = createSprite(i, e, 20, 20)
              //  person.debug()
                rand = Math.round(random(1, 25))
                // console.log(rand)

                if (rand % 12 === 0) {
                    person.addImage(red)
                    red.width = 20
                    red.height = 20
                    group2.add(person)
                } else {
                    person.addImage(grey)
                    group1.add(person)
                }



                grey.width = 20
                grey.height = 20
                // rand = random(Math.round())
                if (frameCount % 30 == 0) {
                    person.velocityX = random(-2, 2)
                    person.velocityY = random(-2, 2)
                }

            }


        }
       
        // for (var i = 40; i < 1200; i = i + 100) {
        //     for (var e = 20; e < 400; e += 80) {
        //         infected = createSprite(i, e, 20, 20)
        //         infected.addImage(red)
        //         group2.add(infected)
        //         red.width = 20
        //         red.height = 20
        //         if (frameCount % 30 == 0) {
        //             infected.velocityX = random(-2, 2)
        //             infected.velocityY = random(-2, 2)
        //         }

        //     }


        // }
        // for (var i = 40; i < 1200; i = i + 100) {
        //     for (var e = 20; e < 400; e += 80) {
        //         recovered = createSprite(i, e, 20, 20)
        //         recovered.addImage(green)
        //         group3.add(recovered)
        //         green.width = 20
        //         green.height = 20
        //         if (frameCount % 30 == 0) {
        //             recovered.velocityX = random(-2, 2)
        //             recovered.velocityY = random(-2, 2)
        //         }

        //     }


        //}


    }

}




function draw() {
    if (gameState === 0) {
        background("#00bfff")
        textSize(50)
        fill("black")
        // text("Dr. fix the outbreak", 75, 100)
    }
  
    if (gameState === 1) {
        for (var s = 0; s < group1.length; s++) {
            
            for (var v = 0; v < group2.length; v++) {

                if (group2.get(v).isTouching(group1.get(s))) {
                    console.log("a")

                    group1.get(s).addImage(red)
                    red.width = 20
                    red.height = 20
                    //group1.get(s).remove(group1)
                    group2.add(group1.get(s))
                } else { }
            }
        }
        background(0)
        group1.bounceOff(edges)
        group2.bounceOff(edges)
        group3.bounceOff(edges)
    }


    drawSprites()
}

