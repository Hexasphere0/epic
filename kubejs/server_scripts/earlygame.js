onEvent("recipes", event => {
    // crafting table
    event.remove({output: "minecraft:crafting_table"})
    event.shaped(
        'minecraft:crafting_table'
        [
            'FF',
            'WW'
        ],
        {
            F: 'minecraft:flint', 
            W: 'minecraft:diorite',
        }
    )

    // cutting board
    event.remove({output: "farmersdelight:cutting_board"})
    event.shaped(
        'farmersdelight:cutting_board',
        [
            'SWW',
            'FBB'
        ],
        {
            'S': 'minecraft:stick',
            'W': '#minecraft:planks',
            'F': "minecraft:flint",
            'B': "farmersdelight:straw_bale"
        }
    )

    // stone knife
    event.remove({output: "farmersdelight:stone_knife"})

    // straw bale
    event.remove({output: "farmersdelight:straw_bale"})
    event.shaped(
        'farmersdelight:straw_bale',
        [
            'SSS',
            'SSS',
            'SSS'
        ],
        {
            'S': "farmersdelight:straw"
        }
    )

    event.remove({output: "farmersdelight:straw", type: "minecraft:shaped"})
    event.shapeless(
        "9x farmersdelight:straw",
        [
            "farmersdelight:straw_bale"
        ]
    )

    //flint tools
    event.remove({output: 'charcoalpit:flint_pickaxe'})
    event.shaped(
        'charcoalpit:flint_pickaxe',
        [
            'FFF',
            ' S ',
            ' L '
        ],
        {
            'F': "minecraft:flint",
            'S': "farmersdelight:rope",
            'L': "minecraft:stick"
        }
    )

    event.remove({output: 'charcoalpit:flint_shovel'})
    event.shaped(
        "charcoalpit:flint_shovel",
        [
            ' F ',
            ' S ',
            ' L '
        ],
        {
            'F': "minecraft:flint",
            'S': "farmersdelight:rope",
            'L': "minecraft:stick"
        }
    )

    event.remove({output: "charcoalpit:flint_axe"})
    event.shaped(
        "charcoalpit:flint_axe",
        [
            ' FF',
            ' SF',
            ' L '
        ],
        {
            'F': "minecraft:flint",
            'S': "farmersdelight:rope"
        }
    )

    event.remove({output: "charcoalpit:flint_hoe"})
    event.shaped(
        "charcoalpit:flint_hoe",
        [
            ' FF',
            ' S ',
            ' L '
        ],
        {
            'F': "minecraft:flint",
            'S': "farmersdelight:rope",
            'L': "minecraft:stick"
        }
    )

    event.remove({output: 'minecraft:campfire'})
    event.campfire_cooking('kubejs:wet_bound_leather', 'kubejs:bound_leather')



})