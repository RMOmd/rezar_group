import { Locale } from "@/types/i18n";

export interface Translations {
  nav: {
    home: string;
    catalog: string;
    about: string;
    process: string;
    reviews: string;
    contacts: string;
    contactUs: string;
    favorites: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewCatalog: string;
    contactUs: string;
    trustHistory: string;
    trustStock: string;
    trustDirect: string;
  };
  advantages: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    items: {
      title: string;
      description: string;
    }[];
    standard: string;
    guaranteed: string;
  };
  featured: {
    badge: string;
    title1: string;
    title2: string;
    viewAll: string;
    fullCatalog: string;
  };
  howWeWork: {
    label: string;
    title1: string;
    title2: string;
    desc: string;
    stage: string;
    concierge: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  about: {
    label: string;
    title1: string;
    title2: string;
    desc1: string;
    desc2: string;
    bullets: string[];
    philosophyLabel: string;
    philosophyText: string;
    learnMore: string;
  };
  testimonials: {
    badge: string;
    title1: string;
    title2: string;
    demoBadge: string;
    items: {
      author: string;
      role: string;
      vehicle: string;
      comment: string;
    }[];
  };
  cta: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    contactManager: string;
    writeTelegram: string;
  };
  footer: {
    desc: string;
    navTitle: string;
    servicesTitle: string;
    contactsTitle: string;
    inStockLink: string;
    inTransitLink: string;
    archiveLink: string;
    favoritesLink: string;
    aboutLink: string;
    stepsLink: string;
    customOrderLink: string;
    customsLink: string;
    reviewsLink: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  catalog: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    searchPlaceholder: string;
    foundCount: string;
    vehiclesWord: string;
    filtersBtn: string;
    sortLabel: string;
    sorts: {
      newest: string;
      oldest: string;
      price_asc: string;
      price_desc: string;
      year_desc: string;
      mileage_asc: string;
    };
    activeFilters: string;
    resetAll: string;
    emptyTitle: string;
    emptyDesc: string;
    loadMore: string;
    loading: string;
    detailsBtn: string;
  };
  filters: {
    title: string;
    totalFound: string;
    reset: string;
    newArrivals: string;
    statusLabel: string;
    statuses: {
      all_active: string;
      in_stock: string;
      in_transit: string;
      sold: string;
      all: string;
    };
    brandLabel: string;
    brandSearch: string;
    clear: string;
    modelLabel: string;
    selectBrandFirst: string;
    noModels: string;
    priceLabel: string;
    from: string;
    to: string;
    yearLabel: string;
    yearFrom: string;
    yearTo: string;
    mileageLabel: string;
    anyMileage: string;
    upTo: string;
    mobileApply: string;
    mobileTitle: string;
  };
  vehicleDetail: {
    home: string;
    catalog: string;
    backToCatalog: string;
    soldNoticeTitle: string;
    soldNoticeDesc: string;
    findSimilarBtn: string;
    specsTitle: string;
    descTitle: string;
    featuresTitle: string;
    similarBadge: string;
    similarTitle: string;
    similarFound: string;
    costLabel: string;
    writeManager: string;
    callManager: string;
    quickMessengers: string;
    guarantee1: string;
    guarantee2: string;
    shareTooltip: string;
    copiedTooltip: string;
    photoCount: string;
    ofWord: string;
  };
  specs: {
    year: string;
    mileage: string;
    enginePower: string;
    fuel: string;
    transmission: string;
    drive: string;
    bodyColor: string;
    interior: string;
    location: string;
    vin: string;
  };
  statusBadges: {
    in_stock: string;
    in_transit: string;
    sold: string;
  };
  fuels: {
    petrol: string;
    diesel: string;
    hybrid: string;
    electric: string;
    plug_in_hybrid: string;
  };
  drives: {
    all_wheel: string;
    rear_wheel: string;
    front_wheel: string;
  };
  transmissions: {
    automatic: string;
    manual: string;
    robot: string;
    variator: string;
  };
  bodyTypes: {
    suv: string;
    sedan: string;
    coupe: string;
    wagon: string;
    cabriolet: string;
    liftback: string;
  };
  favoritesPage: {
    badge: string;
    title: string;
    backToCatalog: string;
    totalValue: string;
    clearAll: string;
    emptyTitle: string;
    emptyDesc: string;
    goToCatalog: string;
    sortByLabel: string;
    sortAddedTime: string;
    sortPriceDesc: string;
    sortPriceAsc: string;
    sortYearDesc: string;
  };
  leadModal: {
    titleGeneral: string;
    titleVehicle: string;
    vehiclePrefix: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    commentLabel: string;
    commentPlaceholder: string;
    submit: string;
    sending: string;
    directCall: string;
    successTitle: string;
    successDesc: string;
    writeTelegram: string;
    close: string;
  };
  notFoundPage: {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    toCatalog: string;
    toHome: string;
  };
}

export const TRANSLATIONS: Record<Locale, Translations> = {
  uk: {
    nav: {
      home: "Головна",
      catalog: "Автомобілі",
      about: "Про компанію",
      process: "Як ми працюємо",
      reviews: "Відгуки",
      contacts: "Контакти",
      contactUs: "Зв'язатися з нами",
      favorites: "Обрані авто",
    },
    hero: {
      badge: "REZAR GROUP • LUXURY AUTOMOTIVE DEALERSHIP",
      titleLine1: "Ваш наступний автомобіль",
      titleLine2: "починається тут.",
      subtitle:
        "Підбираємо автомобілі, які відповідають вашим найвищим очікуванням. Прозорий процес, офіційно перевірені пропозиції та персональний супровід на кожному етапі.",
      viewCatalog: "Переглянути каталог",
      contactUs: "Зв'язатися з нами",
      trustHistory: "Юридична чистота та історія",
      trustStock: "Понад 30 ексклюзивних авто в базі",
      trustDirect: "Прямі поставки з офіційних дилерів",
    },
    advantages: {
      label: "Чому обирають нас",
      title1: "Стандарти сервісу",
      title2: "REZAR GROUP",
      desc: "Ми будуємо довгострокові довірливі відносини та забезпечуємо найвищу якість на кожному етапі співпраці.",
      items: [
        {
          title: "Перевірені автомобілі",
          description:
            "Комплексна перевірка за 140 пунктами: товщина ЛФП, комп'ютерна діагностика, перевірка пробігу за базами офіційних дилерів.",
        },
        {
          title: "Прозорі умови",
          description:
            "Офіційний договір із фіксацією фінальної вартості. Жодних прихованих комісій, платежів чи непередбачуваних витрат.",
        },
        {
          title: "Індивідуальний підхід",
          description:
            "Персональний консьєрж-менеджер. Знаходимо рідкісні кольори та ексклюзивні комплектації у приватних закритих колекціях Європи.",
        },
        {
          title: "Супровід до отримання",
          description:
            "Організовуємо митне очищення, сертифікацію, професійний детейлінг та постановку на облік. Ви отримуєте авто з номерами.",
        },
      ],
      standard: "Стандарт Rezar",
      guaranteed: "Гарантовано",
    },
    featured: {
      badge: "Шоурум REZAR GROUP",
      title1: "Автомобілі,",
      title2: "доступні сьогодні",
      viewAll: "Усі автомобілі",
      fullCatalog: "Переглянути повний каталог",
    },
    howWeWork: {
      label: "Прозорий алгоритм",
      title1: "Як ми працюємо:",
      title2: "4 кроки до вашого авто",
      desc: "Повний комплекс консьєрж-послуг без стресу та втрати часу. Ми беремо на себе всі юридичні, технічні та логістичні питання.",
      stage: "Етап",
      concierge: "REZAR Concierge",
      steps: [
        {
          title: "Вибір автомобіля",
          description:
            "Визначаємо ваші критерії: бюджет, бажану комплектацію, колір та терміни. Формуємо пул найкращих пропозицій з Європи або пропонуємо варіанти з наявних.",
        },
        {
          title: "Узгодження деталей",
          description:
            "Проводимо очну діагностику авто за кордоном, надаємо детальний фото- та відеозвіт із заміром товщини ЛФП. Укладаємо офіційний договір із фіксацією ціни.",
        },
        {
          title: "Організація доставки",
          description:
            "Транспортуємо автомобіль спеціалізованим критим автовозом із повним страхуванням. Проходимо митне оформлення та сертифікацію відповідності стандартам.",
        },
        {
          title: "Отримання автомобіля",
          description:
            "Виконуємо передпродажний детейлінг, ставимо автомобіль на державний облік з обраними номерами та урочисто передаємо вам у нашому шоурумі або під дверима будинку.",
        },
      ],
    },
    about: {
      label: "Про REZAR GROUP",
      title1: "Більше, ніж просто",
      title2: "автомобілі",
      desc1:
        "REZAR GROUP створено як сучасний автомобільний простір для тих, хто цінує свій час, персональний підхід та бездоганний технічний стан транспорту.",
      desc2:
        "Ми спеціалізуємося на автомобілях преміального та люксового сегментів: від офіційних європейських дилерів з підтвердженим пробігом та чистою історією сервісного обслуговування.",
      bullets: [
        "Пряма комунікація з європейськими автосалонами без посередників",
        "Особистий огляд та виїзна інспекція нашими спеціалістами",
        "Повний юридичний супровід та страхування транспортування",
      ],
      philosophyLabel: "Філософія бренду",
      philosophyText:
        "Безкомпромісна увага до кожної деталі та історії кожного автомобіля",
      learnMore: "Дізнатися більше",
    },
    testimonials: {
      badge: "Досвід наших клієнтів",
      title1: "Що кажуть про",
      title2: "співпрацю з REZAR",
      demoBadge: "Демонстраційні відгуки клієнтів",
      items: [
        {
          author: "Олександр М.",
          role: "Підприємець, Київ",
          vehicle: "Porsche Cayenne Coupe Turbo GT",
          comment:
            "Шукав авто в особливій комплектації. Команда REZAR GROUP за 4 дні знайшла екземпляр у Мюнхені з повною прозорою історією обслуговування. Доставка, митне оформлення та детейлінг перед передачею — на найвищому рівні.",
        },
        {
          author: "Валерій К.",
          role: "IT-директор, Львів",
          vehicle: "BMW M8 Competition Gran Coupe",
          comment:
            "Вражений персональним ставленням: детальний відеозвіт товщиноміром ще до підписання договору, офіційна перевірка на дилері в Німеччині. Жодних прихованих комісій — сума збіглася до цента.",
        },
        {
          author: "Ірина Д.",
          role: "Власниця юридичної фірми, Одеса",
          vehicle: "Mercedes-Benz G 63 AMG",
          comment:
            "Автомобіль доставили просто під офіс у закритому евакуаторі в ідеальному стані. Поставили на облік та оформили КАСКО без моєї участі у держустановах. Економія часу та нервів колосальна.",
        },
        {
          author: "Максим С.",
          role: "Інвестор, Дніпро",
          vehicle: "Audi RS6 Avant Performance",
          comment:
            "Працюю з REZAR вже втретє — оновлюю сімейний автопарк лише через них. Преміум-рівень відчувається у кожному повідомленні, фотозвіті та пункті контракту.",
        },
      ],
    },
    cta: {
      badge: "Персональний автомобільний консьєрж",
      title1: "Шукаєте автомобіль",
      title2: "своєї мрії?",
      desc: "Допоможемо знайти оптимальний варіант відповідно до ваших індивідуальних побажань, бюджету та термінів. Надамо повну калькуляцію під ключ.",
      contactManager: "Зв'язатися з менеджером",
      writeTelegram: "Написати в Telegram",
    },
    footer: {
      desc: "Преміальний автомобільний сервіс. Підбір, детальна інспекція та доставка ексклюзивних автомобілів з офіційною історією з країн Європейського Союзу.",
      navTitle: "Навігація",
      servicesTitle: "Послуги",
      contactsTitle: "Контакти",
      inStockLink: "Автомобілі в наявності",
      inTransitLink: "Автомобілі в дорозі",
      archiveLink: "Архів проданих авто",
      favoritesLink: "Збережені авто (Обране)",
      aboutLink: "Про REZAR GROUP",
      stepsLink: "Етапи роботи",
      customOrderLink: "Індивідуальний підбір",
      customsLink: "Митне оформлення",
      reviewsLink: "Відгуки клієнтів",
      rights: "Всі права захищені. Концептуальний прототип преміального автомобільного сервісу.",
      privacy: "Політика конфіденційності",
      terms: "Умови обслуговування",
    },
    catalog: {
      badge: "Каталог автомобілів",
      title1: "Автомобілі в",
      title2: "наявності",
      desc: "Оберіть автомобіль, який відповідає вашим потребам. Кожен автомобіль пройшов комплексну технічну та юридичну інспекцію.",
      searchPlaceholder: "Пошук за назвою або VIN...",
      foundCount: "Знайдено:",
      vehiclesWord: "автомобілів",
      filtersBtn: "Фільтри",
      sortLabel: "Сортування:",
      sorts: {
        newest: "Спочатку нові за надходженням",
        oldest: "Спочатку старіші за надходженням",
        price_asc: "Ціна: за зростанням",
        price_desc: "Ціна: за спаданням",
        year_desc: "Рік: новіші",
        mileage_asc: "Пробіг: найменший",
      },
      activeFilters: "Активні фільтри:",
      resetAll: "Скинути всі",
      emptyTitle: "Автомобілів за такими критеріями не знайдено",
      emptyDesc: "Спробуйте розширити параметри пошуку або скинути активні фільтри.",
      loadMore: "Завантажити ще автомобілі",
      loading: "Завантаження...",
      detailsBtn: "Деталі →",
    },
    filters: {
      title: "Фільтри",
      totalFound: "Знайдено авто:",
      reset: "Скинути",
      newArrivals: "Нові надходження",
      statusLabel: "Статус автомобіля",
      statuses: {
        all_active: "Усі активні",
        in_stock: "В наявності",
        in_transit: "В дорозі",
        sold: "Продано (архів)",
        all: "Всі авто",
      },
      brandLabel: "Марка",
      brandSearch: "Пошук марки...",
      clear: "Очистити",
      modelLabel: "Модель",
      selectBrandFirst: "Оберіть марку для вибору моделі",
      noModels: "Немає доступних моделей",
      priceLabel: "Ціна (USD)",
      from: "Від",
      to: "До",
      yearLabel: "Рік випуску",
      yearFrom: "Рік від",
      yearTo: "Рік до",
      mileageLabel: "Максимальний пробіг",
      anyMileage: "Будь-який пробіг",
      upTo: "до",
      mobileApply: "Показати авто",
      mobileTitle: "Фільтри каталогу",
    },
    vehicleDetail: {
      home: "Головна",
      catalog: "Каталог",
      backToCatalog: "Назад до каталогу",
      soldNoticeTitle: "Цей автомобіль уже знайшов свого власника",
      soldNoticeDesc:
        "Інформація збережена для ознайомлення з нашими кейсами. Ви можете обрати серед наявних схожих варіантів або замовити індивідуальний підбір аналогічного авто під ключ.",
      findSimilarBtn: "Підібрати схоже",
      specsTitle: "Технічні характеристики",
      descTitle: "Опис автомобіля",
      featuresTitle: "Комплектація та додаткове обладнання",
      similarBadge: "Рекомендовані варіанти",
      similarTitle: "Схожі автомобілі в наявності та в дорозі",
      similarFound: "Знайдено альтернативних варіантів:",
      costLabel: "Вартість автомобіля:",
      writeManager: "Написати менеджеру",
      callManager: "Зателефонувати:",
      quickMessengers: "Швидка консультація у месенджерах",
      guarantee1: "100% перевірка лакофарбового покриття та VIN",
      guarantee2: "Офіційний супровід та швидка доставка",
      shareTooltip: "Скопіювати посилання",
      copiedTooltip: "Скопійовано!",
      photoCount: "фото",
      ofWord: "з",
    },
    specs: {
      year: "Рік випуску",
      mileage: "Пробіг",
      enginePower: "Двигун та потужність",
      fuel: "Тип пального",
      transmission: "Коробка передач",
      drive: "Привід",
      bodyColor: "Кузов / Колір",
      interior: "Інтер'єр",
      location: "Локація",
      vin: "VIN-номер",
    },
    statusBadges: {
      in_stock: "Авто в наявності",
      in_transit: "Авто в дорозі",
      sold: "Продано",
    },
    fuels: {
      petrol: "Бензин",
      diesel: "Дизель",
      hybrid: "Гібрид",
      electric: "Електро",
      plug_in_hybrid: "Plug-in гібрид",
    },
    drives: {
      all_wheel: "Повний (AWD/4WD)",
      rear_wheel: "Задній (RWD)",
      front_wheel: "Передній (FWD)",
    },
    transmissions: {
      automatic: "Автомат",
      manual: "Механіка",
      robot: "Робот",
      variator: "Варіатор",
    },
    bodyTypes: {
      suv: "Позашляховик / SUV",
      sedan: "Седан",
      coupe: "Купе",
      wagon: "Універсал",
      cabriolet: "Кабріолет",
      liftback: "Ліфтбек",
    },
    favoritesPage: {
      badge: "Особиста колекція",
      title: "Обрані автомобілі",
      backToCatalog: "Повернутися до каталогу",
      totalValue: "Сумарна вартість:",
      clearAll: "Очистити все",
      emptyTitle: "Ваш список обраного порожній",
      emptyDesc:
        "Додавайте вподобані автомобілі до списку, натиснувши на іконку сердечка на картці в каталозі.",
      goToCatalog: "Перейти до каталогу",
      sortByLabel: "Сортування:",
      sortAddedTime: "За часом додавання (спочатку нові)",
      sortPriceDesc: "За ціною: від дорогих до дешевих",
      sortPriceAsc: "За ціною: від дешевих до дорогих",
      sortYearDesc: "За роком: спочатку нові",
    },
    leadModal: {
      titleGeneral: "Зв'язатися з менеджером",
      titleVehicle: "Замовити перегляд або підбір",
      vehiclePrefix: "Авто:",
      nameLabel: "Ваше ім'я *",
      namePlaceholder: "Олександр",
      phoneLabel: "Номер телефону *",
      commentLabel: "Коментар чи побажання",
      commentPlaceholder: "Бажаний час для дзвінка або особливі побажання...",
      submit: "Надіслати запит",
      sending: "Відправка...",
      directCall: "Або зателефонуйте напряму:",
      successTitle: "Дякуємо за запит!",
      successDesc:
        "Менеджер REZAR GROUP зв'яжеться з вами протягом 15 хвилин для детальної консультації.",
      writeTelegram: "Написати в Telegram",
      close: "Закрити",
    },
    notFoundPage: {
      badge: "Помилка 404",
      title1: "Сторінку не",
      title2: "знайдено",
      desc: "Можливо, цей автомобіль уже знято з експозиції або адреса була введена з помилкою. Скористайтеся каталогом для пошуку актуальних пропозицій.",
      toCatalog: "До каталогу авто",
      toHome: "На головну",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      catalog: "Автомобили",
      about: "О компании",
      process: "Как мы работаем",
      reviews: "Отзывы",
      contacts: "Контакты",
      contactUs: "Связаться с нами",
      favorites: "Избранные авто",
    },
    hero: {
      badge: "REZAR GROUP • LUXURY AUTOMOTIVE DEALERSHIP",
      titleLine1: "Ваш следующий автомобиль",
      titleLine2: "начинается здесь.",
      subtitle:
        "Подбираем автомобили, соответствующие вашим самым высоким ожиданиям. Прозрачный процесс, официально проверенные предложения и персональное сопровождение на каждом этапе.",
      viewCatalog: "Смотреть каталог",
      contactUs: "Связаться с нами",
      trustHistory: "Юридическая чистота и история",
      trustStock: "Более 30 эксклюзивных авто в базе",
      trustDirect: "Прямые поставки от официальных дилеров",
    },
    advantages: {
      label: "Почему выбирают нас",
      title1: "Стандарты сервиса",
      title2: "REZAR GROUP",
      desc: "Мы строим долгосрочные доверительные отношения и обеспечиваем наивысшее качество на каждом этапе сотрудничества.",
      items: [
        {
          title: "Проверенные автомобили",
          description:
            "Комплексная проверка по 140 пунктам: толщина ЛКП, компьютерная диагностика, проверка пробега по базам официальных дилеров.",
        },
        {
          title: "Прозрачные условия",
          description:
            "Официальный договор с фиксацией финальной стоимости. Никаких скрытых комиссий, платежей или непредвиденных расходов.",
        },
        {
          title: "Индивидуальный подход",
          description:
            "Персональный консьерж-менеджер. Находим редкие цвета и эксклюзивные комплектации в частных закрытых коллекциях Европы.",
        },
        {
          title: "Сопровождение до получения",
          description:
            "Организуем таможенное оформление, сертификацию, профессиональный детейлинг и постановку на учет. Вы получаете авто с номерами.",
        },
      ],
      standard: "Стандарт Rezar",
      guaranteed: "Гарантировано",
    },
    featured: {
      badge: "Шоурум REZAR GROUP",
      title1: "Автомобили,",
      title2: "доступные сегодня",
      viewAll: "Все автомобили",
      fullCatalog: "Смотреть полный каталог",
    },
    howWeWork: {
      label: "Прозрачный алгоритм",
      title1: "Как мы работаем:",
      title2: "4 шага к вашему авто",
      desc: "Полный комплекс консьерж-услуг без стресса и потери времени. Мы берем на себя все юридические, технические и логистические вопросы.",
      stage: "Этап",
      concierge: "REZAR Concierge",
      steps: [
        {
          title: "Выбор автомобиля",
          description:
            "Определяем ваши критерии: бюджет, желаемую комплектацию, цвет и сроки. Формируем пул лучших предложений из Европы или предлагаем варианты из наличия.",
        },
        {
          title: "Согласование деталей",
          description:
            "Проводим очную диагностику авто за границей, предоставляем подробный фото- и видеоотчет с замером толщины ЛКП. Заключаем официальный договор с фиксацией цены.",
        },
        {
          title: "Организация доставки",
          description:
            "Транспортируем автомобиль специализированным крытым автовозом с полным страхованием. Проходим таможенную очистку и сертификацию.",
        },
        {
          title: "Получение автомобиля",
          description:
            "Выполняем предпродажный детейлинг, регистрируем автомобиль с выбранными номерами и торжественно передаем в нашем шоуруме или у вашего дома.",
        },
      ],
    },
    about: {
      label: "О компании REZAR GROUP",
      title1: "Больше, чем просто",
      title2: "автомобили",
      desc1:
        "REZAR GROUP создан как современное автомобильное пространство для тех, кто ценит свое время, персональный подход и безупречное техническое состояние транспорта.",
      desc2:
        "Мы специализируемся на автомобилях премиального и люксового сегментов: от официальных европейских дилеров с подтвержденным пробегом и чистой сервисной историей.",
      bullets: [
        "Прямая коммуникация с европейскими автосалонами без посредников",
        "Личный осмотр и выездная инспекция нашими специалистами",
        "Полное юридическое сопровождение и страхование транспортировки",
      ],
      philosophyLabel: "Философия бренда",
      philosophyText:
        "Бескомпромиссное внимание к каждой детали и истории каждого автомобиля",
      learnMore: "Узнать больше",
    },
    testimonials: {
      badge: "Опыт наших клиентов",
      title1: "Что говорят о",
      title2: "сотрудничестве с REZAR",
      demoBadge: "Демонстрационные отзывы клиентов",
      items: [
        {
          author: "Александр М.",
          role: "Предприниматель, Киев",
          vehicle: "Porsche Cayenne Coupe Turbo GT",
          comment:
            "Искал авто в особой комплектации. Команда REZAR GROUP за 4 дня нашла экземпляр в Мюнхене с полной прозрачной историей обслуживания. Доставка, таможня и детейлинг — на высшем уровне.",
        },
        {
          author: "Валерий К.",
          role: "IT-директор, Львов",
          vehicle: "BMW M8 Competition Gran Coupe",
          comment:
            "Впечатлен персональным отношением: подробный видеоотчет толщиномером еще до подписания договора, официальная проверка на дилере в Германии. Никаких скрытых комиссий — сумма совпала до цента.",
        },
        {
          author: "Ирина Д.",
          role: "Владелица юридической фирмы, Одесса",
          vehicle: "Mercedes-Benz G 63 AMG",
          comment:
            "Автомобиль доставили прямо под офис в закрытом эвакуаторе в идеальном состоянии. Поставили на учет и оформили КАСКО без моего участия в госорганах. Экономия времени колоссальная.",
        },
        {
          author: "Максим С.",
          role: "Инвестор, Днепр",
          vehicle: "Audi RS6 Avant Performance",
          comment:
            "Работаю с REZAR уже в третий раз — обновляю семейный автопарк только через них. Премиум-уровень чувствуется в каждом сообщении, фотоотчете и пункте контракта.",
        },
      ],
    },
    cta: {
      badge: "Персональный автомобильный консьерж",
      title1: "Ищете автомобиль",
      title2: "своей мечты?",
      desc: "Поможем найти оптимальный вариант в соответствии с вашими индивидуальными пожеланиями, бюджетом и сроками. Предоставим полную калькуляцию под ключ.",
      contactManager: "Связаться с менеджером",
      writeTelegram: "Написать в Telegram",
    },
    footer: {
      desc: "Премиальный автомобильный сервис. Подбор, детальная инспекция и доставка эксклюзивных автомобилей с официальной историей из стран Европейского Союза.",
      navTitle: "Навигация",
      servicesTitle: "Услуги",
      contactsTitle: "Контакты",
      inStockLink: "Автомобили в наличии",
      inTransitLink: "Автомобили в пути",
      archiveLink: "Архив проданных авто",
      favoritesLink: "Сохраненные авто (Избранное)",
      aboutLink: "О REZAR GROUP",
      stepsLink: "Этапы работы",
      customOrderLink: "Индивидуальный подбор",
      customsLink: "Таможенное оформление",
      reviewsLink: "Отзывы клиентов",
      rights: "Все права защищены. Концептуальный прототип премиального автомобильного сервиса.",
      privacy: "Политика конфиденциальности",
      terms: "Условия обслуживания",
    },
    catalog: {
      badge: "Каталог автомобилей",
      title1: "Автомобили в",
      title2: "наличии",
      desc: "Выберите автомобиль, отвечающий вашим потребностям. Каждый автомобиль прошел комплексную техническую и юридическую инспекцию.",
      searchPlaceholder: "Поиск по названию или VIN...",
      foundCount: "Найдено:",
      vehiclesWord: "автомобилей",
      filtersBtn: "Фильтры",
      sortLabel: "Сортировка:",
      sorts: {
        newest: "Сначала новые по поступлению",
        oldest: "Сначала более старые по поступлению",
        price_asc: "Цена: по возрастанию",
        price_desc: "Цена: по убыванию",
        year_desc: "Год: новее",
        mileage_asc: "Пробег: наименьший",
      },
      activeFilters: "Активные фильтры:",
      resetAll: "Сбросить все",
      emptyTitle: "Автомобилей по таким критериям не найдено",
      emptyDesc: "Попробуйте расширить параметры поиска или сбросить активные фильтры.",
      loadMore: "Загрузить еще автомобили",
      loading: "Загрузка...",
      detailsBtn: "Подробнее →",
    },
    filters: {
      title: "Фильтры",
      totalFound: "Найдено авто:",
      reset: "Сбросить",
      newArrivals: "Новые поступления",
      statusLabel: "Статус автомобиля",
      statuses: {
        all_active: "Все активные",
        in_stock: "В наличии",
        in_transit: "В пути",
        sold: "Продано (архив)",
        all: "Все авто",
      },
      brandLabel: "Марка",
      brandSearch: "Поиск марки...",
      clear: "Очистить",
      modelLabel: "Модель",
      selectBrandFirst: "Выберите марку для выбора модели",
      noModels: "Нет доступных моделей",
      priceLabel: "Цена (USD)",
      from: "От",
      to: "До",
      yearLabel: "Год выпуска",
      yearFrom: "Год от",
      yearTo: "Год до",
      mileageLabel: "Максимальный пробег",
      anyMileage: "Любой пробег",
      upTo: "до",
      mobileApply: "Показать авто",
      mobileTitle: "Фильтры каталога",
    },
    vehicleDetail: {
      home: "Главная",
      catalog: "Каталог",
      backToCatalog: "Назад в каталог",
      soldNoticeTitle: "Этот автомобиль уже нашел своего владельца",
      soldNoticeDesc:
        "Информация сохранена для ознакомления с нашими кейсами. Вы можете выбрать среди доступных похожих вариантов или заказать индивидуальный подбор аналогичного авто под ключ.",
      findSimilarBtn: "Подобрать похожее",
      specsTitle: "Технические характеристики",
      descTitle: "Описание автомобиля",
      featuresTitle: "Комплектация и дополнительное оборудование",
      similarBadge: "Рекомендуемые варианты",
      similarTitle: "Похожие автомобили в наличии и в пути",
      similarFound: "Найдено альтернативных вариантов:",
      costLabel: "Стоимость автомобиля:",
      writeManager: "Написать менеджеру",
      callManager: "Позвонить:",
      quickMessengers: "Быстрая консультация в мессенджерах",
      guarantee1: "100% проверка лакокрасочного покрытия и VIN",
      guarantee2: "Официальное сопровождение и быстрая доставка",
      shareTooltip: "Скопировать ссылку",
      copiedTooltip: "Скопировано!",
      photoCount: "фото",
      ofWord: "из",
    },
    specs: {
      year: "Год выпуска",
      mileage: "Пробег",
      enginePower: "Двигатель и мощность",
      fuel: "Тип топлива",
      transmission: "Коробка передач",
      drive: "Привод",
      bodyColor: "Кузов / Цвет",
      interior: "Интерьер",
      location: "Локация",
      vin: "VIN-номер",
    },
    statusBadges: {
      in_stock: "Авто в наличии",
      in_transit: "Авто в пути",
      sold: "Продано",
    },
    fuels: {
      petrol: "Бензин",
      diesel: "Дизель",
      hybrid: "Гибрид",
      electric: "Электро",
      plug_in_hybrid: "Plug-in гибрид",
    },
    drives: {
      all_wheel: "Полный (AWD/4WD)",
      rear_wheel: "Задний (RWD)",
      front_wheel: "Передний (FWD)",
    },
    transmissions: {
      automatic: "Автомат",
      manual: "Механика",
      robot: "Робот",
      variator: "Вариатор",
    },
    bodyTypes: {
      suv: "Внедорожник / SUV",
      sedan: "Седан",
      coupe: "Купе",
      wagon: "Универсал",
      cabriolet: "Кабриолет",
      liftback: "Лифтбек",
    },
    favoritesPage: {
      badge: "Личная коллекция",
      title: "Избранные автомобили",
      backToCatalog: "Вернуться в каталог",
      totalValue: "Суммарная стоимость:",
      clearAll: "Очистить все",
      emptyTitle: "Ваш список избранного пуст",
      emptyDesc:
        "Добавляйте понравившиеся автомобили в список, нажав на иконку сердечка на карточке в каталоге.",
      goToCatalog: "Перейти в каталог",
      sortByLabel: "Сортировка:",
      sortAddedTime: "По времени добавления (сначала новые)",
      sortPriceDesc: "По цене: от дорогих к дешевым",
      sortPriceAsc: "По цене: от дешевых к дорогим",
      sortYearDesc: "По году: сначала новые",
    },
    leadModal: {
      titleGeneral: "Связаться с менеджером",
      titleVehicle: "Заказать просмотр или подбор",
      vehiclePrefix: "Авто:",
      nameLabel: "Ваше имя *",
      namePlaceholder: "Александр",
      phoneLabel: "Номер телефона *",
      commentLabel: "Комментарий или пожелания",
      commentPlaceholder: "Желаемое время для звонка или особые пожелания...",
      submit: "Отправить запрос",
      sending: "Отправка...",
      directCall: "Или позвоните напрямую:",
      successTitle: "Спасибо за запрос!",
      successDesc:
        "Менеджер REZAR GROUP свяжется с вами в течение 15 минут для подробной консультации.",
      writeTelegram: "Написать в Telegram",
      close: "Закрыть",
    },
    notFoundPage: {
      badge: "Ошибка 404",
      title1: "Страница не",
      title2: "найдена",
      desc: "Возможно, этот автомобиль уже снят с экспозиции или адрес был введен с ошибкой. Воспользуйтесь каталогом для поиска актуальных предложений.",
      toCatalog: "В каталог авто",
      toHome: "На главную",
    },
  },
  en: {
    nav: {
      home: "Home",
      catalog: "Vehicles",
      about: "About Us",
      process: "How It Works",
      reviews: "Reviews",
      contacts: "Contacts",
      contactUs: "Contact Us",
      favorites: "Saved Vehicles",
    },
    hero: {
      badge: "REZAR GROUP • LUXURY AUTOMOTIVE DEALERSHIP",
      titleLine1: "Your Next Vehicle",
      titleLine2: "Starts Here.",
      subtitle:
        "We source premium vehicles that match your highest expectations. Transparent process, verified European dealer history, and dedicated concierge support.",
      viewCatalog: "Explore Inventory",
      contactUs: "Contact Us",
      trustHistory: "Clean Title & Proven History",
      trustStock: "Over 30 Exclusive Cars Available",
      trustDirect: "Direct Sourcing from Official Dealers",
    },
    advantages: {
      label: "Why Choose Us",
      title1: "Service Standards of",
      title2: "REZAR GROUP",
      desc: "We build enduring, trust-based relationships and maintain supreme quality standards at every step.",
      items: [
        {
          title: "Verified Vehicles",
          description:
            "Rigorous 140-point inspection: paint gauge verification, dealer diagnostics, official European mileage and service logs.",
        },
        {
          title: "Transparent Terms",
          description:
            "Official binding contracts with fixed turnkey costs. Zero hidden fees, unexpected commissions, or price escalations.",
        },
        {
          title: "Bespoke Approach",
          description:
            "Dedicated concierge specialist. We track down rare color specifications and unique option packages across private collections.",
        },
        {
          title: "Turnkey Handover",
          description:
            "We handle customs clearance, certification, expert detailing, and license plate registration. Delivered straight to your door.",
        },
      ],
      standard: "Rezar Standard",
      guaranteed: "Guaranteed",
    },
    featured: {
      badge: "REZAR GROUP SHOWROOM",
      title1: "Vehicles,",
      title2: "Available Today",
      viewAll: "All Vehicles",
      fullCatalog: "View Full Inventory",
    },
    howWeWork: {
      label: "Transparent Process",
      title1: "How We Work:",
      title2: "4 Steps to Your Car",
      desc: "Comprehensive automotive concierge service with zero hassle. We manage all legal, technical, and logistics operations.",
      stage: "Step",
      concierge: "REZAR Concierge",
      steps: [
        {
          title: "Vehicle Selection",
          description:
            "We define your specifications: budget, equipment packages, exterior/interior shades, and timelines. We curate options directly from our stock or European dealer partners.",
        },
        {
          title: "Inspection & Contract",
          description:
            "We conduct on-site physical diagnostics, delivering extensive photo/video dossiers and paint meter readings. We formalize terms with a binding contract.",
        },
        {
          title: "Insured Transport",
          description:
            "We dispatch your vehicle via specialized enclosed carriers with full transit insurance, completing customs clearance and compliance certification.",
        },
        {
          title: "Key Handover",
          description:
            "Following pre-delivery ceramic detailing and state registration, we present the vehicle with keys and registration plates at our showroom or your residence.",
        },
      ],
    },
    about: {
      label: "About REZAR GROUP",
      title1: "More Than Just",
      title2: "Automobiles",
      desc1:
        "REZAR GROUP was established as a contemporary automotive atelier for individuals who value time, personalized attention, and uncompromising vehicle integrity.",
      desc2:
        "We specialize in premium and luxury tier models sourced directly from franchised European dealerships with documented service histories.",
      bullets: [
        "Direct communication with official European dealerships with no middlemen",
        "Personal inspections and on-site expert evaluations",
        "Comprehensive legal support and insured transport operations",
      ],
      philosophyLabel: "Brand Philosophy",
      philosophyText:
        "Uncompromising attention to every engineering nuance and history of every vehicle",
      learnMore: "Discover More",
    },
    testimonials: {
      badge: "Client Experiences",
      title1: "What Clients Say About",
      title2: "Partnering With REZAR",
      demoBadge: "Demonstration Client Feedback",
      items: [
        {
          author: "Alexander M.",
          role: "Entrepreneur, Kyiv",
          vehicle: "Porsche Cayenne Coupe Turbo GT",
          comment:
            "I was searching for a specific spec. REZAR GROUP located the exact vehicle in Munich within 4 days with complete official logs. Transport, customs, and detailing were executed flawlessly.",
        },
        {
          author: "Valeriy K.",
          role: "IT Director, Lviv",
          vehicle: "BMW M8 Competition Gran Coupe",
          comment:
            "Impressed by the individual dedication: a complete micrometer video dossier prior to signing, official Munich dealership inspection. The final balance matched down to the cent.",
        },
        {
          author: "Irina D.",
          role: "Law Firm Principal, Odesa",
          vehicle: "Mercedes-Benz G 63 AMG",
          comment:
            "Delivered directly to my corporate office in an enclosed transport trailer in mint condition. Registration and insurance handled seamlessly without my presence.",
        },
        {
          author: "Maksym S.",
          role: "Private Investor, Dnipro",
          vehicle: "Audi RS6 Avant Performance",
          comment:
            "My third acquisition through REZAR — I upgrade our family vehicles exclusively with them. True luxury standard in every message, report, and contract clause.",
        },
      ],
    },
    cta: {
      badge: "Personal Automotive Concierge",
      title1: "Looking for Your",
      title2: "Dream Vehicle?",
      desc: "Allow us to source the ideal specification aligned with your preferences, budget, and desired delivery window. Complete turnkey calculation provided.",
      contactManager: "Contact Concierge Manager",
      writeTelegram: "Message on Telegram",
    },
    footer: {
      desc: "Premium automotive service. Turnkey sourcing, technical inspection, and delivery of luxury European vehicles with verified history.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactsTitle: "Coordinates",
      inStockLink: "Vehicles in Stock",
      inTransitLink: "Vehicles in Transit",
      archiveLink: "Sold Vehicle Archive",
      favoritesLink: "Saved Vehicles (Favorites)",
      aboutLink: "About REZAR GROUP",
      stepsLink: "How It Works",
      customOrderLink: "Bespoke Sourcing",
      customsLink: "Customs Clearance",
      reviewsLink: "Client Feedback",
      rights: "All rights reserved. Conceptual automotive digital showcase.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    catalog: {
      badge: "Vehicle Catalog",
      title1: "Vehicles in",
      title2: "Stock & Transit",
      desc: "Discover verified automobiles tailored to your expectations. Each unit underwent comprehensive mechanical and title inspections.",
      searchPlaceholder: "Search by model or VIN...",
      foundCount: "Discovered:",
      vehiclesWord: "vehicles",
      filtersBtn: "Filter Options",
      sortLabel: "Sorting:",
      sorts: {
        newest: "Newest Arrivals First",
        oldest: "Oldest Arrivals First",
        price_asc: "Price: Low to High",
        price_desc: "Price: High to Low",
        year_desc: "Year: Most Recent",
        mileage_asc: "Mileage: Lowest First",
      },
      activeFilters: "Active Filters:",
      resetAll: "Reset All",
      emptyTitle: "No vehicles match the selected criteria",
      emptyDesc: "Try widening your search terms or clearing some active filters.",
      loadMore: "Load More Vehicles",
      loading: "Loading inventory...",
      detailsBtn: "View Details →",
    },
    filters: {
      title: "Filters",
      totalFound: "Found Vehicles:",
      reset: "Reset",
      newArrivals: "New Arrivals Only",
      statusLabel: "Vehicle Status",
      statuses: {
        all_active: "All Available",
        in_stock: "In Stock",
        in_transit: "In Transit",
        sold: "Sold (Archive)",
        all: "All Vehicles",
      },
      brandLabel: "Brand",
      brandSearch: "Search brands...",
      clear: "Clear",
      modelLabel: "Model",
      selectBrandFirst: "Select a brand first to view models",
      noModels: "No models found",
      priceLabel: "Price Range (USD)",
      from: "Min",
      to: "Max",
      yearLabel: "Production Year",
      yearFrom: "From year",
      yearTo: "To year",
      mileageLabel: "Maximum Mileage",
      anyMileage: "Any Mileage",
      upTo: "up to",
      mobileApply: "Show Vehicles",
      mobileTitle: "Filter Inventory",
    },
    vehicleDetail: {
      home: "Home",
      catalog: "Inventory",
      backToCatalog: "Back to Inventory",
      soldNoticeTitle: "This vehicle has already found its owner",
      soldNoticeDesc:
        "Retained in our showcase archive for reference. Browse comparable active listings below or request a bespoke search for an identical vehicle.",
      findSimilarBtn: "Find Similar",
      specsTitle: "Technical Specifications",
      descTitle: "Vehicle Overview",
      featuresTitle: "Equipment & Optional Packages",
      similarBadge: "Curated Recommendations",
      similarTitle: "Similar Vehicles Available or in Transit",
      similarFound: "Alternative listings discovered:",
      costLabel: "Total Vehicle Price:",
      writeManager: "Contact Manager",
      callManager: "Direct Call:",
      quickMessengers: "Instant Messaging Consultation",
      guarantee1: "100% paint depth and VIN title verification",
      guarantee2: "Official customs clearance & insured transport",
      shareTooltip: "Copy Shareable Link",
      copiedTooltip: "Copied!",
      photoCount: "photos",
      ofWord: "of",
    },
    specs: {
      year: "Year of Manufacture",
      mileage: "Mileage",
      enginePower: "Engine & Output",
      fuel: "Fuel System",
      transmission: "Transmission",
      drive: "Drivetrain",
      bodyColor: "Body / Color",
      interior: "Interior Trim",
      location: "Location",
      vin: "VIN Code",
    },
    statusBadges: {
      in_stock: "In Stock",
      in_transit: "In Transit",
      sold: "Sold",
    },
    fuels: {
      petrol: "Petrol / Gasoline",
      diesel: "Diesel",
      hybrid: "Hybrid",
      electric: "All-Electric",
      plug_in_hybrid: "Plug-in Hybrid",
    },
    drives: {
      all_wheel: "All-Wheel Drive (AWD/4WD)",
      rear_wheel: "Rear-Wheel Drive (RWD)",
      front_wheel: "Front-Wheel Drive (FWD)",
    },
    transmissions: {
      automatic: "Automatic",
      manual: "Manual",
      robot: "Dual-Clutch (DCT)",
      variator: "CVT",
    },
    bodyTypes: {
      suv: "SUV / Off-Roader",
      sedan: "Sedan",
      coupe: "Coupe",
      wagon: "Station Wagon",
      cabriolet: "Convertible / Cabriolet",
      liftback: "Liftback",
    },
    favoritesPage: {
      badge: "Personal Collection",
      title: "Saved Vehicles",
      backToCatalog: "Return to Inventory",
      totalValue: "Total Portfolio Value:",
      clearAll: "Clear Collection",
      emptyTitle: "Your saved collection is empty",
      emptyDesc:
        "Bookmark preferred vehicles by clicking the heart icon on any card in our inventory.",
      goToCatalog: "Explore Inventory",
      sortByLabel: "Sort by:",
      sortAddedTime: "Time added (newest first)",
      sortPriceDesc: "Price: High to Low",
      sortPriceAsc: "Price: Low to High",
      sortYearDesc: "Year: Newest first",
    },
    leadModal: {
      titleGeneral: "Contact Concierge Manager",
      titleVehicle: "Request Viewing or Bespoke Search",
      vehiclePrefix: "Vehicle:",
      nameLabel: "Your Name *",
      namePlaceholder: "Alexander",
      phoneLabel: "Phone Number *",
      commentLabel: "Preferences or Comments",
      commentPlaceholder: "Preferred call window or specific questions...",
      submit: "Submit Request",
      sending: "Submitting...",
      directCall: "Or call directly:",
      successTitle: "Thank You for Your Inquiry!",
      successDesc:
        "A REZAR GROUP senior concierge manager will contact you within 15 minutes.",
      writeTelegram: "Message on Telegram",
      close: "Close",
    },
    notFoundPage: {
      badge: "Error 404",
      title1: "Page Not",
      title2: "Found",
      desc: "This vehicle may have been delisted from our public showroom or the link is incorrect. Please browse our active inventory.",
      toCatalog: "Back to Inventory",
      toHome: "Back to Home",
    },
  },
};
