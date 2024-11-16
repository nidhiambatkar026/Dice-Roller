const dice_img = document.getElementById('main_img');
        function dice_roll() {
            const min = 1;
            const max = 6;

            const randomnum = Math.round(Math.random() * (max - min)) + min;
            switch (randomnum) {
                case 1:
                    dice_img.src = './Images/one.png';
                    break;
                case 2:
                    dice_img.src = './Images/two.png';
                    break;
                case 3:
                    dice_img.src = './Images/three.png';
                    break;
                case 4:
                    dice_img.src = './Images/four.png';
                    break;
                case 5:
                    dice_img.src = './Images/five.png';
                    break;
                case 6:
                    dice_img.src = './Images/six.png';
                    break;
                default:
                    dice_img.src = './Images/dice.png';
            }
        }