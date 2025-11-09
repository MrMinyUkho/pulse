// функционал для раздела "Вопросы"
document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.closest('.faq-item').classList.toggle('open');
    });
});

$(document).ready(()=>{

    const locale = new Intl.Locale(navigator.language)

    var current_language = "us"

    if(locale === "ua") { 
        current_language = "ua"
        $("#change-language").html("English")
    }

    $("#change-language").click(() => {
        if(current_language == "us") {
            current_language = "ua"
            $("#change-language").html("English")
        } else {
            current_language = "us"
            $("#change-language").html("Українська")
        }
        translatePage()
    })

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
                ourProj: "Наші проєкти",
                ourTeam: "Команда",
                ourContacts: "Контакти",
                Kontakt: "Контакти:",
                "short-description": `
                    Ми команда студентів з різних сфер, об'єднана спільною метою: створювати комерційно успішні проекти з реальною соціальною користю.<br><br>

                    <h4 style="margin:0;">Наші ключові принципи</h4> Конструктивність.<br>
                    Відкидаєш – пропонуй. Ми цінуємо критику, яка веде до вирішення питання.<br><br>

                    Відповідальність.<br>
                    Кожен відповідає за власний результат. Ми довіряємо один одному і очікуємо на активність.<br><br>

                    Єдність.<br>
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

                    Що саме ми зробили?<br><br>

                    Проаналізували потенційних клієнтів, включно з компаніями, які покинули країну через війну, і іноземними компаніями, зацікавленими у масштабуванні бізнесу в Харкові. Сформували базу даних.<br><br>

                    Економісти команди розрахували обсяг інвестицій, необхідних для запуску, утримання та розвитку кожного модуля.<br><br>

                    Отримали точний проміжок необхідних інвестицій і створили фінансовий план із розміром планової дохідності, терміном окупності та економічними вигодами для кожного модуля.<br><br>

                    Дослідили, що місто отримає високооплачувані робочі місця та таланти, які залишаються працювати на благо регіону та країни, перетворюючи Харків на високотехнологічний хаб.<br><br>

                    Вказали найімовірніші ризики і розробили шляхи їх мінімізації для підвищення шансу реалізації проєкту.<br><br>

                    Завдяки ретельній підготовці команда відповіла на всі питання, включно з екологічними, психологічними, безпековими, інженерними, фінансовими та організаційними, і змоделювала приблизну бізнес-модель.<br><br>
                
                `
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
                nick: "Микита"
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
                ourProj: "Our projects",
                ourTeam: "Team",
                ourContacts: "Contacts",
                Kontakt: "Contacts:",
            }

        }
    }

    const list_team_members = [
        { name:"lera",   role:"lera-role",   image:"Lera.jpg" },
        { name:"alex",   role:"alex-role",   image:"" },
        { name:"misha",  role:"misha-role",  image:"Michail.jpg" },
        { name:"igor",   role:"igor-role",   image:"Igor.jpg" },
        { name:"anton",  role:"anton-role",  image:"Anton.jpg" },
        { name:"dima1",  role:"dima1-role",  image:"Dmytro2.jpg" },
        { name:"dima2",  role:"dima2-role",  image:"Dmytro1.jpg" },
      //{ name:"marina", role:"marina-role", image:"Marina.jpg" },
        { name:"roma",   role:"roma-role",   image:"Roman.jpg" },
        { name:"denis",  role:"denis-role",  image:"Denis.jpg" },
        { name:"nick",   role:"nick-role",   image:"makesite.jpg" },
    ]

    $("#team-container").html("")

    for (var i of list_team_members) {
        console.log(i)
        textIfNoPhoto = i.image !== "" ? "" : "Photo"
        imageLink = i.image !== "" ? ` style="background-image: url('/assets/photos/${i.image}');"` : ""
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
            $(`#loc-${key}`).html(value)
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

