let logoButton = document.querySelector('#logoButton');
let imageHeader = document.querySelector('#imageHeader');
let headerText = document.querySelector('#headerText').children;
let headerSection2 = document.querySelector('#headerSection2');
let itemLeftSection = document.querySelectorAll('.itemLeftSection');
let captionContainer = document.querySelector('#captionContainer').children;
let headerSection4 = document.querySelector('#headerSection4');

console.log();

flag = false;
logoButton.addEventListener('click', () => {
  if (flag) {
    imageHeader.src = 'https://i.ibb.co/hD6fJq2/mobile-hero-1.jpg';
    headerText[0].innerText = `We're the Dog People`;
    headerText[1].innerText = `Book trusted, local pet sitters and walkers who will care for your dog like you would.`;
    headerSection2.innerText = `Services for every dogs only`;
    itemLeftSection[0].children[0].children[1].children[0].innerText = `Dog Boarding
    `;
    itemLeftSection[2].children[0].children[1].children[0].innerText = `Dog walking
    `;
    itemLeftSection[2].children[0].children[1].children[1].innerText = `Whenever your dog needs a walk.`;

    itemLeftSection[3].children[0].children[1].children[0].innerText = `Doggy Day Care
    `;
    itemLeftSection[3].children[0].children[1].children[1].innerText = `Daytime pet care in your sitter’s dog-friendly home.`;

    captionContainer[0].src =
      'https://www.rover.com/assets/ssr/311b8f8b33cbc72672fb.webp';

    captionContainer[1].innerText = `I was nervous to leave Sam with strangers, but my worries quickly faded. Going forward Rover will be my first choice for pet sitting.
      `;
    headerSection4.innerText = `We’re the treat-your-dog-like-family dog people
      `;
  } else {
    imageHeader.src = 'https://i.ibb.co/QfqjHxq/mobile-hero-2.jpg';
    headerText[0].innerText = `We're the Cat People`;
    headerText[1].innerText = `Book trusted, local pet sitters and walkers who will care for your cat like you would.`;
    headerSection2.innerText = `Services for every cats only`;
    itemLeftSection[0].children[0].children[1].children[0].innerText = `Cat Boarding
    `;
    itemLeftSection[2].children[0].children[1].children[0].innerText = `Cat walking`;
    itemLeftSection[2].children[0].children[1].children[1].innerText = `Whenever your cat needs a walk.`;
    itemLeftSection[3].children[0].children[1].children[0].innerText = `Catty Day Care`;
    itemLeftSection[3].children[0].children[1].children[1].innerText = `Daytime pet care in your sitter’s cat-friendly home.`;
    captionContainer[0].src =
      'https://www.rover.com/assets/ssr/65358afcd3e90b90ef4a.webp';

    captionContainer[1].innerText = `My sitter took great care of my cat, above and beyond my expectations. I would book with Rover again in a heartbeat! `;

    headerSection4.innerText = `We’re the treat-your-cat-like-family cat people
    `;
  }
  flag = !flag;
});
