ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:stone', 3),
        [
            'A B',
            ' C ',
            'B A'
        ],
        {
            A: 'minecraft:andesite', 
            B: 'minecraft:diorite',
            C: 'minecraft:granite'   
        }
    )
})