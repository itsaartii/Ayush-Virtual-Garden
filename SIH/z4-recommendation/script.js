// script.js
document.getElementById('plant-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const preference = document.getElementById('preference').value;
    const recommendationDiv = document.getElementById('recommendation');
    const descriptionDiv = document.getElementById('plant-description');
    
    const plants = {
        medicinal: {
            'Aloe Vera': 'Aloe Vera is known for its soothing gel that can help with burns, wounds, and skin hydration. It also has anti-inflammatory properties.',
            'Tulsi': 'Tulsi, also known as holy basil, is revered in Ayurveda for its immune-boosting and stress-relieving properties.',
            'Neem': 'Neem is widely used in traditional medicine for its antibacterial, antifungal, and anti-inflammatory effects.',
            'Ashwagandha': 'Ashwagandha is known for its adaptogenic properties that help the body handle stress and improve overall vitality.',
            'Ginger': 'Ginger has anti-nausea and anti-inflammatory properties, and is often used to aid digestion and relieve nausea.',
            
            'Ginseng': 'Ginseng is used for its potential to boost energy, reduce stress, and improve cognitive function.',
            'Turmeric': 'Turmeric contains curcumin, which has powerful anti-inflammatory and antioxidant properties, beneficial for overall health.'
        },
        aromatic: {
            'Lavender': 'Lavender is known for its calming fragrance, often used in aromatherapy to reduce anxiety and promote relaxation.',
            'Mint': 'Mint has a refreshing aroma and is often used to relieve digestive issues and headaches.',
            'Rosemary': 'Rosemary has a stimulating scent that can help improve memory and concentration while also being used in cooking.',
            'Basil': 'Basil has a sweet, peppery aroma and is commonly used in culinary dishes as well as for its potential digestive benefits.',
            'Thyme': 'Thyme has antimicrobial properties and is used in cooking as well as to relieve coughs and respiratory infections.',
            'Lemon Balm': 'Lemon Balm has a lemony scent and is used to reduce stress, improve sleep, and aid digestion.',
            'Sage': 'Sage is known for its earthy aroma and is used in cooking and traditional medicine for its digestive and cognitive benefits.'

        },
        edible: {
            'Basil': 'Basil is a versatile herb used in many cuisines, known for its sweet and peppery flavor and potential digestive benefits.',
            'Chili': 'Chili peppers add heat to dishes and contain capsaicin, which may boost metabolism and reduce pain.',
            'Tomato': 'Tomatoes are rich in vitamins and antioxidants, particularly lycopene, which is beneficial for heart health.',
            'Bell Pepper': 'Bell peppers are high in vitamins A and C, and add a crunchy texture and sweet flavor to dishes.',
            'Cucumber': 'Cucumbers are hydrating and low in calories, often used in salads and for their cooling effects.',

            'Radish': 'Radishes add a spicy crunch to salads and are low in calories while being high in vitamin C and antioxidants.',
            'Carrot': 'Carrots are rich in beta-carotene and fiber, supporting eye health and digestion.'
        },
        cultural: {
            'Marigold': 'Marigolds are bright, cheerful flowers often used in cultural and religious ceremonies for their vibrant color and symbolism.',
            'Hibiscus': 'Hibiscus flowers are used in traditional beverages and for their potential to lower blood pressure and improve skin health.',
            'Jasmine': 'Jasmine flowers have a sweet, floral fragrance and are used in perfumes and to calm the mind.',
            'Lotus': 'Lotus is a symbol of purity and enlightenment in many cultures, and its flowers and seeds are used in traditional medicine.',
            'Sunflower': 'Sunflowers are admired for their large, bright blooms and are often associated with positivity and warmth.',
            'Chrysanthemum': 'Chrysanthemums are celebrated in various cultures for their beauty and are used in teas and traditional medicine.',

            'Gerbera': 'Gerberas are bright, colorful flowers that symbolize cheerfulness and are used in various decorative and celebratory contexts.'
        },
        ornamental: {
            'Rose': 'Roses are classic ornamental flowers known for their beauty and variety, often used in gardens and bouquets.',
            'Orchid': 'Orchids are exotic, elegant flowers that come in a variety of colors and patterns, popular for their unique appearance.',
            'Calla Lily': 'Calla Lilies are known for their sleek, trumpet-shaped flowers and are often used in formal arrangements and gardens.',
            'Begonia': 'Begonias have attractive foliage and vibrant flowers, making them popular in both indoor and outdoor gardens.',
            'Geranium': 'Geraniums are hardy plants with vibrant blooms, commonly used in window boxes and hanging baskets.',

            'Lily': 'Lilies are elegant flowers that come in many varieties, known for their fragrant and beautiful blooms.',
            'Clematis': 'Clematis vines produce large, showy flowers and are often used to add vertical interest to gardens and trellises.'
        },
        succulent: {
            'Aloe Vera': 'Aloe Vera is a succulent plant with thick, fleshy leaves that contain a soothing gel used for skin care and healing.',
            'Cactus': 'Cacti are hardy succulents with spiny stems that store water, thriving in arid environments and requiring minimal care.',
            'Echeveria': 'Echeveria is a rosette-forming succulent with attractive, colorful leaves that are easy to grow and maintain.',
            'Jade Plant': 'Jade Plants are popular for their thick, rounded leaves and are believed to bring good luck and prosperity.',
            'Haworthia': 'Haworthias are small, hardy succulents with unique, patterned leaves, suitable for indoor and outdoor cultivation.',
            'Sedum': 'Sedum, also known as "Stonecrop," is a hardy succulent with fleshy leaves that can tolerate drought and various conditions.',
            'String of Pearls': 'String of Pearls is a trailing succulent with small, spherical leaves that resemble pearls, ideal for hanging baskets.'
        },
        shade: {
            'Hosta': 'Hostas are shade-loving plants with attractive foliage and are commonly used in garden beds and containers.',
            'Ferns': 'Ferns thrive in shaded, moist environments and add a lush, green element to garden spaces and indoor areas.',
            'Astilbe': 'Astilbe plants produce feathery, colorful flower spikes and are ideal for adding texture and color to shady garden areas.',
            'Bleeding Heart': 'Bleeding Heart is known for its unique, heart-shaped flowers and is often used to brighten shady garden spots.',
            'Hellebore': 'Hellebores are early-blooming perennials with attractive, often nodding flowers that thrive in shaded conditions.',
            'Bergenia': 'Bergenia, or "Elephant Ears," is a hardy perennial with large, glossy leaves and early spring flowers, suitable for shade.',
            'Ligularia': 'Ligularia is a robust perennial with bold foliage and striking yellow flowers, well-suited for shady and damp garden spots.'
        },
        perennial: {
            'Daylily': 'Daylilies are hardy perennials with vibrant, trumpet-shaped flowers that bloom profusely throughout the growing season.',
            'Peony': 'Peonies are beloved for their large, fragrant blooms and lush foliage, making them a classic choice for garden beds.',
            'Coneflower': 'Coneflowers, or Echinacea, are hardy perennials with distinctive, daisy-like flowers known for their medicinal properties.',
            'Black-eyed Susan': 'Black-eyed Susans are cheerful, sun-loving perennials with bright yellow petals and dark centers, ideal for garden borders.',
            'Shasta Daisy': 'Shasta Daisies are classic perennials with large, white flowers and a bright yellow center, adding charm to garden beds.',
            'Sedum': 'Sedum, or "Stonecrop," is a hardy perennial with succulent-like leaves and clusters of star-shaped flowers, suitable for various conditions.',
            'Lavender': 'Lavender is a fragrant perennial with spikes of purple flowers, often used in gardens for its beauty and calming scent.'
        },
        annual: {
            'Marigold': 'Marigolds are hardy annuals with bright, cheerful flowers that bloom throughout the summer, known for their pest-repellent properties.',
            'Petunia': 'Petunias are popular annuals with a wide range of colors and patterns, ideal for adding vibrant displays to gardens and containers.',
            'Zinnia': 'Zinnias are colorful, low-maintenance annuals that provide bright blooms throughout the summer, perfect for garden beds and borders.',
            'Sunflower': 'Sunflowers are tall annuals with large, bright yellow blooms that follow the sun, often used to create a striking garden display.',
            'Cosmos': 'Cosmos are delicate annuals with feathery foliage and bright, daisy-like flowers that attract pollinators and add charm to gardens.',
            'Impatiens': 'Impatiens are shade-loving annuals with colorful, long-blooming flowers, perfect for adding vibrant color to shady areas.',
            'Nasturtium': 'Nasturtiums are edible annuals with bright, cheerful flowers and peppery leaves, often used in salads and garden displays.'
        }
    };

    const plantDescriptions = plants[preference];
    let plantList = '';

    for (const plant in plantDescriptions) {
        plantList += `<li data-description="${plantDescriptions[plant]}">${plant}</li>`;
    }

    recommendationDiv.innerHTML = `<h2>Recommended Plants:</h2><ul>${plantList}</ul>`;
});

document.getElementById('recommendation').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        const description = event.target.getAttribute('data-description');
        const descriptionDiv = document.getElementById('plant-description');
        descriptionDiv.innerHTML = `<h3>${event.target.textContent}</h3><p>${description}</p>`;
        descriptionDiv.classList.remove('hidden');
    }
});
