// Header

function createMainNav() {
  const navItems = ['Приветствие', 'О себе', 'Услуги', 'FAQ', 'Контакты']
  const navAnchors = ['#greeting', '#about', '#services', '#faq', '#contacts']

  const nav = document.createElement('nav')
  const navList = document.createElement('ul')

  navItems.forEach((item, ind) => {
    const navItem = document.createElement('li')
    const navLink = document.createElement('a')

    navItem.classList.add('header--item')
    navLink.classList.add('header--item__link')
    navLink.setAttribute("href", `${navAnchors[ind]}`)
    navLink.innerText = item

    navItem.appendChild(navLink)
    navList.appendChild(navItem)
  })

  nav.classList.add('header--menu')
  navList.classList.add('header--list')
  nav.appendChild(navList)
  document.querySelector('.header').appendChild(nav)
}

function createSlogan() {
  // removeBlock('.time-self')

  const slogan = document.createElement('div')
  const sloganItems = ['Психологическая помощь', 'Сергей Чиров', 'когда пора уделить время себе']
  const sloganTemplate = `
    <h1 class="time-self--main-header">${sloganItems[0]}</h1>
    <h2 class="time-self--sec-header">${sloganItems[1]}</h2>
    <p class="time-self--slogan">${sloganItems[2]}</p>
  `

  slogan.classList.add('time-self')
  slogan.innerHTML = sloganTemplate
  document.querySelector('.header').appendChild(slogan)
}

createMainNav()
createSlogan()

// Main

// greeting

function createReasonsList() {
  const reasons = [
    'Кризисы (в работе, отношениях, жизни) проходят с меньшими потерями',
    'Экономия времени - 3 месяца терапии меньше 3-х лет плохой жизни',
    'Инвестиции в себя (личный рост и осознанность) - лучшее из вложений',
    'Всегда есть тот, с кем можно обо всем поговорить, выговориться',
    'У психолога сам себе врать не будешь',
    'И психолог тебе врать не будет',
    'Жить гармоничной личностью - приятно',
    'Успешные люди давно ходят к психологу',
    'Профилактика возникновения разных расстройств, проблем',
    'Безоценочное принятие и поддержка - на вес золота!',
  ]

  const list = document.createElement('ul')
  list.classList.add('reasons')

  reasons.forEach(item => {
    const reason = document.createElement('li')

    reason.classList.add('reasons__item')
    reason.innerText = item
    list.appendChild(reason)
  })
  return list
}

function createGreeting() {
  const greeting = document.createElement('div')
  const header = document.createElement('h1')
  const reasonsHeader = document.createElement('h2')

  greeting.classList.add('block', 'greeting')
  header.classList.add('block__header')
  header.id = 'greeting'
  header.innerText = 'Приветствие'
  reasonsHeader.innerText = '10 причин посещать психолога'
  reasonsHeader.classList.add('reasons-header')

  greeting.appendChild(header)
  greeting.appendChild(reasonsHeader)
  greeting.appendChild(createReasonsList())
  document.querySelector('.main').appendChild(greeting)
}

createGreeting()

// about
function createArticle() {
  const article = document.createElement('article')
  const header = document.createElement('h2')
  const headerPara1 = document.createElement('p')
  const headerPara2 = document.createElement('p')
  const subHeader1 = document.createElement('h3')
  const subHeader1Para = document.createElement('p')
  const subHeader2 = document.createElement('h3')

  header.classList.add('about-article__header')
  subHeader1.classList.add('about-article__sub-header')
  subHeader2.classList.add('about-article__sub-header')

  header.innerText = 'Меня зовут СЕРГЕЙ ЧИРОВ'
  headerPara1.innerHTML = 'Я&nbsp;психотерапевт. Психолог. В&nbsp;профессии с&nbsp;2011 года. Образование получал в&nbsp;5-ти разных институтах и&nbsp;продолжаю учиться. Преподаю. Работаю индивидуально, с&nbsp;парами, и&nbsp;группы. Веду профессиональный блог. В&nbsp;работе использую только проверенные годами техники, опираясь на&nbsp;системный научный подход.'
  headerPara1.innerHTML = 'Уверен, что каждому Человеку в&nbsp;сложных делах нужен Человек, способный услышать, увидеть и&nbsp;понять, не&nbsp;осуждая и&nbsp;не&nbsp;пытаясь учить жить. И&nbsp;тогда всё возможно.'
  subHeader1.innerHTML = 'Факты про меня:'
  subHeader1Para.innerHTML = 'Уважителен, пунктуален, последователен. Имею хорошее чувство юмора. Люблю жить. Увлекаюсь спортом и&nbsp;чтением. Играю на&nbsp;гитаре. Женат.'
  subHeader2.innerHTML = 'Отзывы обо мне можно почитать здесь'


  article.appendChild(header)
  article.appendChild(headerPara1)
  article.appendChild(headerPara2)
  article.appendChild(subHeader1)
  article.appendChild(subHeader1Para)
  article.appendChild(subHeader2)

  return article
}

function createAbout() {
  const about = document.createElement('section')
  const header = document.createElement('h1')

  about.classList.add('block')
  header.classList.add('block__header')
  header.id = 'about'
  header.innerText = 'О себе'

  about.appendChild(header)
  about.appendChild(createArticle())
  document.querySelector('.main').appendChild(about)
}

createAbout()

// services

function createServicesList() {
  const services = ['Индивидуально', 'Для пары', 'Студентам']
  const list = document.createElement('ul')

  services.forEach(item => {
    const listItem = document.createElement('li')
    const listLink = document.createElement('a')

    listItem.classList.add('list__item')
    listLink.classList.add('list__link')
    listLink.setAttribute('href', '#services')
    listLink.innerText = item

    listItem.appendChild(listLink)
    list.appendChild(listItem)
  })

  list.classList.add('list')
  return list
}

function createTabPane(paneName) {
  const pane = document.createElement('figure')

  for (let i = 1; i <= 3; i++) {
    const img = document.createElement('img')

    switch (paneName) {
      case 'Индивидуально':
        img.src = `../images/dest/service-1/service-1-${i}.jpg`
        img.alt = `service-1-${i}`
        img.classList.add('pane__img', 'pane__img_scalable')
        pane.appendChild(img)
        break;
      case 'Для пары':
        img.src = `../images/dest/service-2/service-2-${i}.jpg`
        img.alt = `service-2-${i}`
        img.classList.add('pane__img', 'pane__img_scalable')
        pane.appendChild(img)
        break;
      case 'Студентам':
        img.src = `../images/dest/service-3/service-3-${i}.jpg`
        img.alt = `service-3-${i}`
        img.classList.add('pane__img', 'pane__img_scalable')
        pane.appendChild(img)
        break;
    }
  }

  pane.classList.add('pane', 'pane_hide')
  pane.setAttribute('data-pane-name', `${paneName}`)
  return pane
}



function createServices() {
  const services = document.createElement('section')
  const header = document.createElement('h1')

  services.classList.add('block', 'services')
  header.classList.add('block__header')
  header.id = 'services'
  header.innerText = 'Услуги'

  services.appendChild(header)
  services.appendChild(createServicesList())
  services.appendChild(createTabPane('Индивидуально'))
  services.appendChild(createTabPane('Для пары'))
  services.appendChild(createTabPane('Студентам'))
  document.querySelector('.main').appendChild(services)
}

createServices()

document.addEventListener("DOMContentLoaded", function() {
  $('.header--burger').click(function(event) {
    $('.header--burger, .header--menu').toggleClass('active');
  })

  $('.pane:first').removeClass('pane_hide')

  $('.list__link').click(function() {
    const linksList = $('.list__link')
    const panesList = $('.pane')

    for (let link of linksList) {
      if ($(link).hasClass('list__link_active')) $(link).removeClass('list__link_active')
      $(this).addClass('list__link_active')
    }

    for (let pane of panesList) {
      let name = $(pane).attr(`data-pane-name`)
      $(pane).addClass('pane_hide')
      if (name === $(this).text()) $(pane).removeClass('pane_hide')
    }
  })
});
