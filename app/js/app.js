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
    // navLink.addEventListener('click', function() {
    //   this.classList.add('header--item__link_active')
    //   // link.classList.remove('header--item__link_active')
    // })

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
  const paneCaption = document.createElement('figcaption')
  const paneCost = document.createElement('span')

  switch (paneName) {
    case 'Индивидуально':
      paneCaption.innerHTML = `<span class="pane__text">Тет-а-тет с психологом.</span>
      <span class="pane__text">50 минут</span>`
      paneCost.innerHTML = 'Стоимость — 2000₽'
      break;
    case 'Для пары':
      paneCaption.innerHTML = `<span class="pane__text">2-3 участника + психолог.</span>
      <span class="pane__text"> 1 час 20 минут</span>`
      paneCost.innerHTML = 'Стоимость — 2500₽'
      break;
    case 'Студентам':
      paneCaption.innerHTML = `<span class="pane__text">Студентам скидка 50% (в том числе супервизия)</span>
      <span class="pane__text">50 минут</span>`
      paneCost.innerHTML = 'Стоимость — 1000₽'
      break;
  }
  paneCaption.classList.add('pane__caption')
  pane.appendChild(paneCaption)

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

  paneCost.classList.add('pane__cost')
  pane.appendChild(paneCost)
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

// faq

function createFaqItem(summ, det, idPart  ) {
  const summary = document.createElement('div')
  const summaryHeader = document.createElement('button')
  const summaryBody = document.createElement('p')

  summaryHeader.innerText = summ
  summaryBody.innerHTML = det

  summary.classList.add('summary')
  summaryHeader.classList.add('summary__header')
  summaryBody.classList.add('summary__body')

  summaryHeader.addEventListener('click', function() {
    const content = this.nextElementSibling
    this.classList.toggle('summary__header_active')

    if (content.classList.contains('summary__body_visible')) {
      content.classList.remove('summary__body_visible_height')
        setTimeout(() => {
        content.classList.remove('summary__body_visible')
        document.documentElement.scrollTop = this.offsetTop - this.offsetHeight
      }, 520)
     } else {
      content.classList.add('summary__body_visible')
      document.documentElement.scrollTop = this.offsetTop - this.offsetHeight
      setTimeout(() => {
        content.classList.add('summary__body_visible_height')
      }, 20)
    }
  })

  summary.appendChild(summaryHeader)
  summary.appendChild(summaryBody)
  return summary
}

function createFaq() {
  const faqItemData = [
    {
      'Сколько мне потребуется посещать психолога?': `Во-первых, аналогия со&nbsp;спорт залом: приходит человек к&nbsp;тренеру и&nbsp;говорит&nbsp;&mdash; &laquo;хочу отличную фигуру и&nbsp;пресс кубиками&raquo;. А&nbsp;в&nbsp;какой форме человек сейчас? Какой он&nbsp;образ жизни ведёт? Сколько ему лет? Какую именно он&nbsp;хочет фигуру и&nbsp;как быстро? Возможно&nbsp;ли это в&nbsp;принципе?
      Во-вторых, средняя статистика: на&nbsp;детальное прояснение ситуации (как устроена проблема) уходит до&nbsp;3-х часов. Выявление стратегии и&nbsp;этапов работы по&nbsp;качественным изменениям&nbsp;&mdash; 5&ndash;7 часов (в&nbsp;терапии или самостоятельно). Наступление ощутимых стабильных изменений&nbsp;&mdash; 10&ndash;12 часов. Принципиально качественное изменение уклада и&nbsp;образа жизни (и&nbsp;мышления)&nbsp;&mdash; не&nbsp;один год.
      По&nbsp;сему&nbsp;&mdash; у&nbsp;каждого свои задачи, цели, временные возможности и&nbsp;явное желание действовать и&nbsp;менять что-то. Не&nbsp;забываем и&nbsp;про активное ваше сопротивление.`
    },
    {
      'Почему терапию нельзя получить бесплатно, и она стоит не дёшево?': `Получение гос. образования по&nbsp;специальности &laquo;психолог&raquo; создаёт специалиста со&nbsp;знаниями о&nbsp;том, как устроена психика. Но&nbsp;не&nbsp;даёт нужных тонких инструментов для работы (увы, и&nbsp;это не&nbsp;моё мнение). Хороший психолог работает своей личностью (психотерапия&nbsp;&mdash; лечение душой). Для этого необходимо проходить личную терапию, обучаться в&nbsp;длительных программах, совершенствоваться, очень многое изучая и&nbsp;инвестируя в&nbsp;себя. По&nbsp;моим скромным расчётам, на&nbsp;сегодняшний день в&nbsp;свои умения я&nbsp;вложил 14 лет прилежной учёбы и&nbsp;около 1,5&nbsp;млн. (!) рублей. И&nbsp;это продолжается. Ни&nbsp;одна поликлиника не&nbsp;может позволить себе таких инвестиций в&nbsp;специалиста. Да&nbsp;и&nbsp;мало кто согласиться столько учиться и&nbsp;работать за&nbsp;20&nbsp;000р/мес.
      К&nbsp;примеру&nbsp;&mdash; мой парикмахер учился в&nbsp;общей сложности 1 год, а&nbsp;его стрижка стоит мне 1500р. А&nbsp;сколько стоят ваши хорошие специалисты?`
    },
    {
      'А всем людям нужна терапия?': `По&nbsp;мнению многих моих клиентов, находящихся в&nbsp;терапии более 3-х месяцев&nbsp;&mdash; терапия нужна вообще всем, и&nbsp;чем раньше, тем лучше. Я&nbsp;же считаю, что это не&nbsp;так. Есть много людей, которые росли в&nbsp;таких семьях и&nbsp;в&nbsp;таком окружении, что научились с&nbsp;детства вполне хорошо справляться со&nbsp;сложностями, имея вполне здоровые для этого механизмы и&nbsp;способы.
      Есть и&nbsp;обратная сторона: некоторым терапия попросту не&nbsp;подходит. Например, с&nbsp;выражено сниженным интеллектом, в&nbsp;возрасте, когда уже психика не&nbsp;способна к&nbsp;изменениям или с&nbsp;сильными изменения в&nbsp;следствии, например, алкоголизма. А&nbsp;некоторым вовсе нужен психиатр, а&nbsp;не&nbsp;психолог.&nbsp;Под каждое дело&nbsp;&mdash; свой специалист.`
    },
    {
      'Как себя вести у психолога?': `Особых жёстких правил для этого нет. Я&nbsp;выделяю два популярных варианта:
      <ol><li>Вы&nbsp;приходите и&nbsp;говорите о&nbsp;чём-то конкретном, что вас сейчас больше всего волнует или тревожит в&nbsp;жизни. И&nbsp;мы&nbsp;работаем вместе над этой конкретной задачей.</li>
      <li>Вы&nbsp;приходите и&nbsp;рассказываете о&nbsp;том, как вы&nbsp;в&nbsp;общем сейчас живёте, какие факты вы&nbsp;выделяете среди повседневности и&nbsp;как на&nbsp;них реагируете (что нравится, что нет). И&nbsp;тогда мы&nbsp;работаем над этим, постепенно приближаясь к&nbsp;тому, как&nbsp;бы вам хотелось жить, что чувствовать.</li></ol>
      В&nbsp;кабинете можно говорить о&nbsp;чём угодно, как угодно, будучи настолько прямым и&nbsp;откровенным, насколько посчитаете нужным. Есть только 2 ограничения: правило конфиденциальности (не&nbsp;рассказываем третьим лицам ничего личного) и&nbsp;правило безопасности (не&nbsp;вредим имуществу и&nbsp;друг другу физически или психически).`
    },
    {
      'А как понять, что психолог - хороший и к нему можно идти?': `Вопрос на&nbsp;самом деле не&nbsp;простой. Существует как минимум 2 варианта:
      <ol><li>Поиск по&nbsp;рекомендации. Поспрашивать знакомых&nbsp;&mdash; кто у&nbsp;кого был, какие впечатления, помог&nbsp;ли. Вариант хорош &laquo;проверенностью&raquo;, но&nbsp;не&nbsp;всегда точен ввиду субъективности&nbsp;&mdash; &laquo;тебе подходит, а&nbsp;мне не&nbsp;подходит&raquo;.</li>
      <li>По&nbsp;объективным признакам. Приходите (или звоните) и&nbsp;смело спрашиваете: к&nbsp;какой школе он&nbsp;себя относит (варианты типа Эклектики&nbsp;&mdash; это я&nbsp;понимаю во&nbsp;всём, но&nbsp;толком ни&nbsp;в&nbsp;чём) и&nbsp;сколько времени учился (должно быть не&nbsp;менее 4-х лет специализации), сколько у&nbsp;него часов личной терапии и&nbsp;продолжает&nbsp;ли её (должно быть пройдено не&nbsp;менее 80-ти), сколько часов личной супервизии и&nbsp;продолжает&nbsp;ли её получать (должно быть уже не&nbsp;менее 50-ти), как часто посещает конференции и&nbsp;семинары повышения квалификации (не&nbsp;менее 1&ndash;2 раза в&nbsp;год). В&nbsp;идеале&nbsp;&mdash; какие есть доп. специализации (мин. 1 годичная, в&nbsp;идеале по&nbsp;вашей теме).</li></ol>
      По&nbsp;итогу&nbsp;&mdash; выбираете себе понравившегося чем-либо психолога (к&nbsp;неприятному вам человеку не&nbsp;стоит идти), приходите и&nbsp;пробуете. Если чувствуете, что Оно, помогает, что-то начинает меняться&nbsp;&mdash; значит угадали. Наслаждайтесь. Если всё плохо, не&nbsp;по&nbsp;душе, дикое сопротивление&nbsp;&mdash; обсудите это с&nbsp;психологом. Если нет сил с&nbsp;этим жить&nbsp;&mdash; ищите другого специалиста без угрызений совести. Это нормально.`
    },
  ]
  const faq = document.createElement('section')
  const header = document.createElement('h1')

  faq.classList.add('block', 'faq')
  header.classList.add('block__header')
  header.id = 'faq'
  header.innerText = 'FAQ'

  faq.appendChild(header)

  faqItemData.forEach((summary, ind) => {
    for (const data in summary) {
      faq.appendChild(createFaqItem(data, summary[data], ind))
    }
  })
  document.querySelector('.main').appendChild(faq)
}
createFaq()

// contacts

function createContacts() {
  const contacts = document.createElement('section')
  const header = document.createElement('h1')
  const map = document.createElement('div')

  header.classList.add('block__header')
  header.id = 'contacts'
  header.innerText = 'Контакты'

  contacts.classList.add('block', 'contacts')
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2389.58043641256!2d50.195087015936835!3d53.20744039280746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41661ea79d4cdfdd%3A0x8dc5a583515dc018!2z0YPQuy4g0JTRi9Cx0LXQvdC60L4sIDMwLCDQodCw0LzQsNGA0LAsINCh0LDQvNCw0YDRgdC60LDRjyDQvtCx0LsuLCA0NDMwNDU!5e0!3m2!1sru!2sru!4v1598126148342!5m2!1sru!2sru" width="100%" height="330" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`

  contacts.appendChild(header)
  contacts.appendChild(map)

  document.querySelector('.main').appendChild(contacts)
}
createContacts()

// footer

function addFooter() {
  const footer = document.createElement('footer')
  const place = document.querySelector('.container')

  footer.innerText = 'Project 2020'
  footer.classList.add('footer')
  place.appendChild(footer)
}
addFooter()

document.addEventListener("DOMContentLoaded", function() {

  // burger

  $('.header--burger').click(function(event) {
    $('.header--burger, .header--menu').toggleClass('active');
  })

  // header links

  $('.header--item__link').click(function() {
    const linksList = $('.header--item__link')

    for (let link of linksList) {
      if ($(link).hasClass('header--item__link_active')) $(link).removeClass('header--item__link_active')
      $(this).addClass('header--item__link_active')
    }
  })

  // services panes

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

  // $(".header--item__link").click(function() {
  //   $.getJSON("/json/faq.json", function(result, status){
  //     $.each(result, function(i, field){
  //       // $("body").append(field + " ");
  //       console.log(field, i)
  //       // console.log(JSON.parse(result))
  //     });
  //   });
  // });

  // scroll sections

  // $("a.header--item").click(function () {
  //   var elementClick = $(this).attr("href");
  //   var destination = $(elementClick).offset().top + 50;
  //   console.log(destination)
  //   $('html,body').animate({scrollTop: destination}, 400);
  //   return false;
  // });

});
