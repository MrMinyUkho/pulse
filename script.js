// функционал для разделу "Вопроси"
document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const faqItem = btn.closest('.faq-item');
        const faqA = faqItem.querySelector('.faq-a');
        
        faqItem.classList.toggle('open');

        if (faqItem.classList.contains('open')) {
            // Устанавливаем max-height равным реальной высоте контента
            faqA.style.maxHeight = faqA.scrollHeight + "px";
        } else {
            // Сбрасываем max-height для анимации закрытия
            faqA.style.maxHeight = null;
        }
    });
});

// функционал для карточек проектів
document.querySelectorAll('.project-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        const projectCard = btn.closest('.project-card');
        const projectA = projectCard.querySelector('.project-a');
        
        projectCard.classList.toggle('open');

        if (projectCard.classList.contains('open')) {
            // Устанавливаем max-height равным реальной высоте контента
            projectA.style.maxHeight = projectA.scrollHeight + "px";
        } else {
            // Сбрасываем max-height для анимации закрытия
            projectA.style.maxHeight = null;
        }
    });
});

$(document).ready(()=>{

    const locale = new Intl.Locale(navigator.language)

    var current_language = "us"

    const langData = {
        us: { flag: './assets/icons/us_flag.svg', text: 'EN' },
        ua: { flag: './assets/icons/ua_flag.svg', text: 'UA' }
    };

    const projectLinks = {
        ua: {
            learn_more1: "https://docs.google.com/document/d/1yKPdnKxUCoSX6Xvirg4z06DyIRVW7DeE-lSSPtvezgU/edit?usp=sharing",
            learn_more2: "https://docs.google.com/document/d/1YxuGs3IgMKMbyVEqVtJfa26p9vRKJ5Oek8UveBQbK7s/edit?usp=sharing",
            learn_more3: "https://docs.google.com/document/d/15PXXSpi1MhIw92v6jnRsC0c_zjFk75aCg5-Ol-BgraM/edit?usp=sharing"
        },
        us: {
            learn_more1: "https://docs.google.com/document/d/1ys7G0cYQ_xPbTogcdxnJMv1HF08RaEfQKU132xFFopY/edit?usp=sharing",
            learn_more2: "https://docs.google.com/document/d/1dcYERLQAGf0S9uIq7XoSOlER7gCGWdRF635_StebjKQ/edit?usp=sharing",
            learn_more3: "https://docs.google.com/document/d/1rcIlug89CQ7yZvmaGiCrJYXmXjjGlkPWzY0Ornowu2Y/edit?usp=sharing"
        }
    };

    function updateProjectLinks(lang) {
        $('#loc-learn-more1').attr('href', projectLinks[lang].learn_more1);
        $('#loc-learn-more2').attr('href', projectLinks[lang].learn_more2);
        $('#loc-learn-more3').attr('href', projectLinks[lang].learn_more3);
    }

    function updateLangButton(lang) {
        $('#current-lang-flag').attr('src', langData[lang].flag);
        $('#current-lang-text').text(langData[lang].text);
    }

    if (locale.language === "uk") { 
        current_language = "ua";
    }

    updateLangButton(current_language);
    updateProjectLinks(current_language);

    $('#language-toggle').click(() => {
        $('.language-selector').toggleClass('open');
    });

    $('#language-options a').click(function(e) {
        e.preventDefault();
        const newLang = $(this).data('lang');
        if (newLang !== current_language) {
            current_language = newLang;
            updateLangButton(newLang);
            updateProjectLinks(newLang);
            translatePage();
        }
        $('.language-selector').removeClass('open');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.language-selector').length) {
            if ($('.language-selector').hasClass('open')) {
                $('.language-selector').removeClass('open');
            }
        }
    });

    const vocabulary = {
        ua: {
            membersName: {
                anton: "Антон",
                dima1: "Дмитро",
                dima2: "Дмитро",
                igor: "Ігор",
                lera: "Валерія",
                marina: "Марина",
                roma: "Роман",
                alex: "Олексій",
                misha: "Михайло",
                denis: "Денис",
                nick: "Микита"
            },
            teamRoles: {
                "anton-role": "Капітан команди з 3Д, програмування та інженерії",
                "dima1-role": "Програміст та інженер",
                "dima2-role": "Еколог",
                "igor-role": "Представник команди екологів",
                "lera-role": "CEO",
                "marina-role": "3Д дизайнер",
                "roma-role": "Економіст",
                "alex-role": "Асистент СЕО",
                "misha-role": "Капітан економічної команди",
                "denis-role": "Еколог",
                "nick-role": "Програміст"
            },
            content: {
                ourProj: "Проєкти",
                ourTeam: "Команда",
                ourContacts: "Контакти",
                Kontakt: "Почта:",
                "entry-word": "Думай глибше, але не ускладнюй",
                "our-projects": "Наші проєкти",
                "short-description": `
                    Ми команда студентів з різних сфер, об'єднана спільною метою: створювати комерційно<br>
                    успішні проекти з реальною соціальною користю.<br><br>

                    <h2 style="margin:0;">Наші ключові принципи:</h2><br>
                    <b>• Конструктивність.</b><br>
                    Відкидаєш – пропонуй. Ми цінуємо критику, яка веде до вирішення питання.<br><br>

                    <b>• Відповідальність.</b><br>
                    Кожен відповідає за власний результат. Ми довіряємо один одному і очікуємо на активність.<br><br>

                    <b>• Єдність.</b><br>
                    Ми одна команда. Ділимося на групи для ефективності, але завжди працюємо як єдине ціле.
                `,
                "pulse1-desc": `
                    Продали проєкт за 3 хвилини. Що за проєкт? Як?<br><br>

                    18 жовтня 2025 команда Пульс була змушена розділитися на 2 частини на хакатоні, оскільки правила дозволяли максимум 6 осіб у команді. Так і з'явилися проєкти Пульс 1 і Пульс 2.<br>
                    Напрямки проєкту Пульс 1: економіка, бізнес-стратегії та соціальна частина.<br><br>

                    Пульс 1 базується на ідеї перенесення бізнесу під землю з вибором найбільш актуальних і перспективних напрямків. Ми маємо 3 модулі, які працюють на синергії:<br>
                    "Мозок" — лабораторія з проєктування чипів.<br>
                    "Хребет" — дата-центр, який використовується для зберігання інтелектуальної власності і здачі в оренду бізнесам з усієї країни.<br>
                    "Серце" — медичний хаб, де технології з лабораторії застосовуються для виготовлення протезів нового покоління, що актуально для післявоєнного життя України та вже сьогодні.<br><br>

                    У одному приміщенні працюють 3 абсолютно різні сфери, але кожен отримує вигоду завдяки співпраці. Чіпи виготовляються для протезів, а база даних зберігається у дата-центрі, яким можуть користуватися резиденти індустріального парку. При цьому кожен бізнес працює окремо, а така співпраця — лише частина обсягу.<br><br>

                    <h4 style="margin:0;">Що саме ми зробили?</h4><br>

                    Проаналізували потенційних клієнтів, включно з компаніями, які покинули країну через війну, і іноземними компаніями, зацікавленими у масштабуванні бізнесу в Харкові. Сформували базу даних.<br><br>

                    Економісти команди розрахували обсяг інвестицій, необхідних для запуску, утримання та розвитку кожного модуля.<br><br>

                    Отримали точний проміжок необхідних інвестицій і створили фінансовий план із розміром планової дохідності, терміном окупності та економічними вигодами для кожного модуля.<br><br>

                    Дослідили, що місто отримає високооплачувані робочі місця та таланти, які залишаються працювати на благо регіону та країни, перетворюючи Харків на високотехнологічний хаб.<br><br>

                    Вказали найімовірніші ризики і розробили шляхи їх мінімізації для підвищення шансу реалізації проєкту.<br><br>

                    Завдяки ретельній підготовці команда відповіла на всі питання, включно з екологічними, психологічними, безпековими, інженерними, фінансовими та організаційними, і змоделювала приблизну бізнес-модель.<br><br>
                    <img src="assets/content/pulse1.PNG"><br>
                `,
                "pulse2-desc": `
                    <h4>Виробництво модульних ТЕЦ</h4>

                    Проєкт "Пульс 2" – це, якщо коротко, виробництво модульних ТЕЦ. Як ми взагалі до цього прийшли? Просто подивились, що відбувається в енергетиці, і знайшли рішення, яке поєднує в собі і ефективність, і мобільність, і гроші.<br><br>

                    В основі ідеї лежить створення теплоелектроцентралей, або ТЕЦ. На відміну від звичайних ТЕС, вони виробляють не тільки електрику, а ще й тепло, і за рахунок цього їхній ККД може досягати 95%.<br><br>

                    Але наша головна фішка – це модульність. Такі станції можна робити прямо в Україні, де собівартість нижча, а потім везти на продаж у більш розвинені країни. Або ж, що не менш важливо, оперативно перекидати їх у ті регіони, де зараз найбільший дефіцит енергії.<br>

                    <h4>Чому це так важливо саме для України?</h4>

                    Все просто: через війну у нас зруйновано близько 80% ТЕС та ТЕЦ. Якщо замість кількох великих станцій створити децентралізовану мережу з великої кількості маленьких, модульних ТЕЦ, то вся енергосистема стане набагато стійкішою до атак. Плюс, це реальна можливість підтримати економіку країни через експорт. Ми можемо використати наші переваги – нижчу собівартість виробництва та наявність крутих інженерів.<br><br>

                    Ми вже проаналізували, що ключові компоненти, як-от турбіни та генератори, виробляються в Україні. Навіть розробили концепцію розрахунку, як правильно розміщувати такі ТЕЦ, щоб це було максимально раціонально.
                `,
                "pulse3-desc": `
                    Готуючись до ReBuild Ukraine, у команди з'явилася ідея "А давайте спробуємо зробити проєкт спеціально під компанії, які там будуть?", так і сіли всі 12 людей думати "Що об'єднує більшість компаній?". Проаналізувавши 112 компаній (база даних була зібрана за соціальними мережами та сайтом) ми дійшли висновку про 3 напрямки які охоплюють 80% компаній, а саме: створення (інжиніринг та будматеріали) модульних будинків, що обслуговують компанії (вода, еко рішення відновлювана енергетика та системи безпеки).<br><br>

                    Ідея створення філії іноземної компанії не була у нас першою у списку всіх ідей. З тим, як ми заглиблювалися в початковий концепт, дізнаючись про його недоліки, ідея з філією виникала все частіше. Врешті-решт вона стала основною, тому що початкова ідея була приведена до висновку "Компанії з модульними будинками і так роблять з 0 і повну установку, а значить, унікальність і синергія загубилися.<br><br>

                    Про відповіді на запитання "А саме як так вийшло?" йде далі.
                `,
                "pulse4-desc":`<img style="border-radius: 1em;" src="assets/content/soon_ua.PNG">`,
                "faq-title": "Найпоширеніші питання",
                "faq1-q": "Що таке команда Пульс?",
                "faq1-a": "Це група амбіційних студентів-активістів. Ми вперше зібралися на одному хакатоні, і після перемоги стали повноцінною командою із спільними амбіціями та інтересами.",
                "faq2-q": "Які послуги ви пропонуєте?",
                "faq2-a": "Якщо у вас є цікава ідея чи невеликий проект, де ви не знаєте, як далі рухатися, ми можемо приєднатися та дослідити всі важливі напрямки, щоб знайти рішення вашої задачі.",
                "faq3-q": "Які у вас напрямки?",
                "faq3-a": "Зараз ми працюємо в менеджменті, екології, економіці, програмуванні та інженерії, але відкриті до нових напрямків та учасників.",
                "faq4-q": "Які у вас цінності?",
                "faq4-a": "Об'єктивність, цілеспрямованість, вміння брати на себе відповідальність і великий інтерес до нового.",
                "pulse1name": "Пульс 1",
                "pulse2name": "Пульс 2",
                "pulse3name": "Проєкт «Варшава»",
                "pulse4name": "Скоро…",
                "team-logo": "Команда",
                "learn-more1": "Дізнатись більше",
                "learn-more2": "Дізнатись більше",
                "learn-more3": "Дізнатись більше"
            }
        },
        us: {
            membersName: {
                anton: "Anton",
                dima1: "Dmytro",
                dima2: "Dmytro",
                igor: "Igor",
                lera: "Valeriia",
                marina: "Maryna",
                roma: "Roman",
                alex: "Oleksii",
                misha: "Mykhailo",
                denis: "Denis",
                nick: "Mykyta"
            },
            teamRoles: {
                "anton-role": "Captain of the 3D design, coding and engineering",
                "dima1-role": "Programmer and engineer",
                "dima2-role": "Ecologist",
                "igor-role": "Team representative of ecology team",
                "lera-role": "CEO",
                "marina-role": "3D designer",
                "roma-role": "Economist",
                "alex-role": "Assistant to CEO",
                "misha-role": "Captain of the economy team",
                "denis-role": "Ecologist",
                "nick-role": "Programmer"
            },
            content: {
                ourProj: "Projects",
                ourTeam: "Team",
                ourContacts: "Contacts",
                Kontakt: "E-mail:",
                "our-projects": "Our projects",
                "entry-word": "Think deeply, but don't complicate",
                "short-description": `
                    We are a team of students from different fields, united by a common goal: to create commercially<br>
                    successful projects with real social benefit.<br><br>

                    <h2 style="margin:0;">Our key principles:</h2><br>
                    <b>• Constructivity.</b><br>
                    If you reject, suggest. We value criticism that leads to a solution.<br><br>

                    <b>• Responsibility.</b><br>
                    Everyone is responsible for their own results. We trust each other and expect activity.<br><br>

                    <b>• Unity.</b><br>
                    We are one team. We divide into groups for efficiency, but always work as a single whole.
                `,
                "pulse1-desc": `
                    <h4 style="margin:0;">Sold the project in 3 minutes. What is the project? How?</h4><br>

                    On October 18, 2025, the Pulse team had to split into two parts at the hackathon because the rules allowed a maximum of 6 people per team. That’s how the projects Pulse 1 and Pulse 2 appeared.<br>
                    Directions of Pulse 1 project: economics, business strategies, and social part.<br>

                    Pulse 1 was developed based on the idea of moving business underground and choosing the most relevant and promising directions. Now, we have 3 modules working in synergy:<br>
                    "Brain" — a chip design laboratory.<br>
                    "Spine" — a data center used to store intellectual property and rent it to businesses across the country.<br>
                    "Heart" — a medical hub where technologies from the laboratory are used to produce next-generation prosthetics, which are needed in post-war Ukraine and even now.<br><br>

                    Three completely different spheres work in one place, but each benefits from cooperation. Chips are made for prosthetics, and the database is stored in the data center used by the industrial park residents. Each business operates separately, and such cooperation is only part of the volume.<br><br>

                    <h4 style="margin:0;">What exactly did we do?</h4><br>

                    Analyzed potential clients, including companies that left the country due to the war and foreign companies interested in scaling business in Kharkiv. Created a database.<br><br>

                    Team economists calculated the amount of investment required to launch, maintain, and develop each module.<br><br>

                    Obtained an exact range of necessary investments and developed a financial plan, including planned profitability, payback period, and economic benefits for each module.<br><br>

                    Researched that the city will receive highly paid jobs and talents who stay and work for the good of the region and the country, turning Kharkiv into a high-tech hub.<br><br>

                    Identified the most probable risks and developed ways to minimize them to increase the project’s chances of success.<br><br>

                    Thanks to thorough preparation, the team answered all possible questions, including ecological, psychological, security, engineering, financial, and organizational, and modeled an approximate business model.<br><br>
                    <img src="assets/content/pulse1.PNG">
                `,
                "pulse2-desc": `
                    <h4>Modular CHP (Combined Heat and Power) Production</h4>

                    The "Pulse 2" project is, in short, the production of modular CHPs. How did we even get to this idea? We just looked at what's happening in the energy sector and found a solution that combines efficiency, mobility, and money.<br><br>

                    The basis of the idea is the creation of combined heat and power plants, or CHPs. Unlike conventional TPPs, they produce not only electricity but also heat, and because of this, their efficiency rating can reach 95%.<br><br>

                    But our key feature is modularity. Such plants can be made right in Ukraine, where the production cost is lower, and then transported for sale to more developed countries. Or, what is no less important, quickly deploy them to those regions where there is currently the greatest energy deficit.<br>

                    <h4>Why is this so important specifically for Ukraine?</h4>

                    It's simple: because of the war, about 80% of our TPPs and CHPs have been destroyed. If instead of a few large plants, we create a decentralized network of a large number of small, modular CHPs, then the entire energy system will become much more resilient to attacks. Plus, this is a real opportunity to support the country's economy through exports. We can use our advantages – lower production cost and the availability of cool engineers.<br><br>

                    We have already analyzed that the key components, such as turbines and generators, are produced in Ukraine. We even developed a calculation concept for how to properly place such CHPs so that it is as rational as possible.
                `,
                "pulse3-desc": `
                    While preparing for Rebuild Ukraine, the team had an idea: "What if we design a project specifically for the companies that will be there?" So all 12 of us started thinking: "What unites most companies?" After analyzing 112 companies (the database was collected from social networks and websites), we came to the conclusion that there are 3 directions covering 80% of companies, namely: creation (engineering and building materials) of modular houses, service companies (water, eco-solutions, renewable energy, and security systems).<br><br>

                    The idea of creating a branch of a foreign company was not at the top of our list of ideas. As we delved deeper into the original concept and discovered its shortcomings, the branch idea came up more and more often. Eventually, it became our main focus because the original idea led to the conclusion: "Companies with modular houses already do everything from zero to full installation themselves, which means uniqueness and synergy were lost."<br><br>

                    The answer to "How exactly did this happen?" will be explained further.
                `,
                "pulse4-desc":`<img style="border-radius: 1em;" src="assets/content/soon_us.PNG">`,
                "faq-title": "FAQ",
                "faq1-q": "What is the Pulse team?",
                "faq1-a": "It is a group of ambitious and skilled student activists. We first met at a hackathon, and after winning, became a full team with shared ambitions and interests.",
                "faq2-q": "What services do you offer?",
                "faq2-a": "If you have an interesting idea or a small project where you don’t see a way forward, we can join and explore all the important directions to find a solution for your problem.",
                "faq3-q": "What areas do you work in?",
                "faq3-a": "Currently, we work in management, ecology, economics, programming, and engineering, but we are open to new directions and members.",
                "faq4-q": "What are your values?",
                "faq4-a": "Objectivity, determination, ability to take responsibility, and a strong interest in new things.",
                "pulse1name": "Pulse 1",
                "pulse2name": "Pulse 2",
                "pulse3name": "«Warszawa» project",
                "pulse4name": "Soon…",
                "team-logo": "Team",
                "learn-more1": "Learn more",
                "learn-more2": "Learn more",
                "learn-more3": "Learn more"
            }

        }
    }

    const list_team_members = [
        { name:"lera",   role:"lera-role",   image:"Lera.jpg" },
        { name:"alex",   role:"alex-role",   image:"alex.png" },
        { name:"misha",  role:"misha-role",  image:"Michail.jpg" },
        { name:"igor",   role:"igor-role",   image:"Igor.jpg" },
        { name:"anton",  role:"anton-role",  image:"Anton.jpg" },
        { name:"dima1",  role:"dima1-role",  image:"Dmytro2.jpg" },
        { name:"dima2",  role:"dima2-role",  image:"Dmytro1.jpg" },
        { name:"roma",   role:"roma-role",   image:"Roman.jpg" },
        { name:"denis",  role:"denis-role",  image:"Denis.jpg" },
        { name:"nick",   role:"nick-role",   image:"nick.png" },
    ]

    $("#team-container").html("")

    for (var i of list_team_members) {
        console.log(i)
        textIfNoPhoto = i.image !== "" ? "" : "Photo"
        imageLink = i.image !== "" ? ` style="background-image: url('./assets/photos/${i.image}');"` : ""
        let member = `<div class="member">
                        <div class="ph"${imageLink}>
                            ${textIfNoPhoto}
                        </div>
                        <div class="meta">
                            <div id="loc-${i.name}" class="name">Имя</div>
                            <div id="loc-${i.role}" class="role">Верховный жрец</div>
                        </div>
                    </div>`
        $("#team-container").append(member)
    }

    function translatePage() {
        
        function get_all_translation(obj) {
            result = {}
            for (const [key, value] of Object.entries(obj)) {
                if(typeof(value) === "string"){
                    result[key] = value
                } else {
                    result = {...result, ...get_all_translation(value)}
                }
            }
            return result
        }
        
        var translate_map = get_all_translation(vocabulary[current_language])

        for (const [key, value] of Object.entries(translate_map)) {
            const element = $(`#loc-${key}`);
            if (element.length) {
                const icon = element.find('i');
                if (icon.length) {
                    // Create a temporary container for the text
                    const textSpan = $('<span></span>').html(value);
                    // Clear the element and append the icon and the new text
                    element.empty().append(icon).append(textSpan);
                } else {
                    element.html(value);
                }
            }
        }
        
    }
    translatePage()

    onscroll = (event) => {
        if(window.scrollY/window.innerHeight > 1){
            if(!$("header").hasClass("header-down")){
                $("header").toggleClass("header-down")
                $("#logoWhite").hide()
                $("#logoBlack").show()
            }
        } else {
            if($("header").hasClass("header-down")){
                $("header").toggleClass("header-down")
                $("#logoWhite").show()
                $("#logoBlack").hide()
            }
        }
    }
})

