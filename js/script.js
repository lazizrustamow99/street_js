const product = {
    beef: {
        name: 'С Говядиной',
        price: 14500,
        amount: 0
    },
    beefRoll: {
        name: 'Биф Рол',
        price: 16000,
        amount: 0
    },
    cheeseBurger: {
        name: 'Чизбургер',
        price: 24000,
        amount: 0
    },
    shaurma: {
        name: 'Шаурма',
        price: 23000,
        amount: 0
    },
    sheep: {
        name: 'С Бараниной',
        price: 20000,
        amount: 0
    },
    chickenRoll: {
        name: 'Чиккен Рол',
        price: 22500,
        amount: 0
    },
};
const addBtn = document.querySelectorAll('.main-menu__content_add'),
    chose = document.querySelector('.chose'),
    hidden = document.querySelector('.hidden');

for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener('click', function () {
        addFunc(this);
    });   
};

function addFunc(element) {
    const parent = element.closest('.main-menu__card'),
        parentId = parent.getAttribute('id'),
        hidName = document.querySelector('.hidden__name'),
        hidPrice = document.querySelector('.hidden__price'),
        hidBlock = document.querySelector('.hidden__block'),
        hidImg = document.querySelector('.hidden__img'),
        hidDesc = document.querySelector('.hidden__description'),
        hidBtn = document.querySelector('.hid__button');
        price = parent.querySelector('.main-menu__content_price');
        product[parentId].amount++;
        totalPrice = price.innerHTML * product[parentId].amount;
        hidImg.style.display = 'block';
        hidDesc.style.display = 'block'
        hidName.innerHTML = product[parentId].name;
        hidPrice.innerHTML = price.innerHTML;
        hidBtn.style.display = 'block';
        hidBlock.style.padding = '20px 20px';
        pr = Number(hidPrice.innerHTML);


        hidBtn.addEventListener('click', function () {
            alert(`Ваш заказ принят:
            Инфо: ${hidName.innerHTML}
            Цена: ${hidPrice.innerHTML}
            Доставка: 9000
            Общая Сумма: ${pr + 9000}
            Доставщик скоро приедет!`)
        })
}
chose.addEventListener('click', function () {
    if (hidden.style.display == 'block') {
        hidden.style.display = 'none'
    }else {
        hidden.style.display = 'block'
    }
})