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

  greeting.classList.add('greeting')
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

  header.innerText = 'Меня зовут СЕРГЕЙ Чиров'
  headerPara1.innerHTML = 'Я&nbsp;психотерапевт. Психолог. В&nbsp;профессии с&nbsp;2011 года. Образование получал в&nbsp;5-ти разных институтах и&nbsp;продолжаю учиться. Преподаю. Работаю индивидуально, с&nbsp;парами, и&nbsp;группы. Веду профессиональный блог. В&nbsp;работе использую только проверенные годами техники, опираясь на&nbsp;системный научный подход.'


  article.appendChild(header)
  article.appendChild(headerPara1)

  return article
}

function createAbout() {
  const about = document.createElement('section')
  const header = document.createElement('h1')

  about.classList.add('about')
  header.classList.add('block__header')
  header.id = 'about'
  header.innerText = 'О себе'

  about.appendChild(header)
  about.appendChild(createArticle())
  document.querySelector('.main').appendChild(about)
}

createAbout()

document.addEventListener("DOMContentLoaded", function() {
  $('.header--burger').click(function(event) {
    $('.header--burger, .header--menu').toggleClass('active');
  })
});
