import { Vehicle } from "@/types/vehicle";

export const VEHICLES: Vehicle[] = [
  {
    id: "porsche-911-gt3-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_911",
    brand: "Porsche",
    model: "911",
    trim: "GT3 Touring Package",
    year: 2023,
    price: 265000,
    mileage: 4200,
    fuelType: "petrol",
    engine: "4.0L Boxer-6 Naturally Aspirated",
    powerHp: 510,
    transmission: "robot",
    drive: "rear_wheel",
    bodyType: "coupe",
    colorExterior: "Crayon Grey (Крейда)",
    colorInterior: "Black Exclusive Leather / Race-Tex",
    vin: "WP0AC2A98PS189201",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-24T10:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Бездоганний Porsche 911 GT3 з пакетом Touring. Офіційний європейський автомобіль, повністю в бронеплівці SunTek. Карбон-керамічна гальмівна система PCCB, спортивна вихлопна система, ліфт передньої осі, ковані диски GT3 із центральною гайкою. Ідеальний колекційний стан.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет Touring Package у чорному глянці",
          "Керамічні композитні гальма Porsche (PCCB)",
          "Ковані диски 20/21 дюймів GT3 із центральною гайкою",
          "Гідравлічна система підйому передньої осі (Lift system)",
          "Матричні світлодіодні фари PDLS Plus у затемненому виконанні",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Адаптивні спортивні сидіння Plus (18 позицій, пам'ять)",
          "Оздоблення салону шкірою Exclusive Manufaktur та Race-Tex",
          "Пакет карбонових вставок інтер'єру",
          "Ремені безпеки кольору Guards Red",
          "Двозонний клімат-контроль та іонізація повітря",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Преміальна акустична система BOSE Surround Sound",
          "Porsche Communication Management (PCM) з Apple CarPlay та Android Auto",
          "Пакет Chrono з додатковим таймером",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Камера заднього огляду з асистентом паркування",
          "Система утримання в смузі руху",
          "Розпізнавання дорожніх знаків",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-m8-competition-gran-coupe-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m8_gran_coupe",
    brand: "BMW",
    model: "M8 Gran Coupe",
    trim: "Competition",
    year: 2023,
    price: 154000,
    mileage: 12500,
    fuelType: "petrol",
    engine: "4.4L V8 M TwinPower Turbo",
    powerHp: 625,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Frozen Dark Silver Metallic",
    colorInterior: "Full Merino Silverstone / Black",
    vin: "WBA83GV05PCD81249",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-26T14:30:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський спортивний седан BMW M8 Competition Gran Coupe в ексклюзивному матовому кольорі Frozen Dark Silver. Автомобіль від офіційного німецького дилера, без жодного підфарбовування. Повний карбоновий пакет, система M xDrive з відключенням переднього приводу, вихлоп M Sport.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "M Carbon зовнішній пакет (дзеркала, дифузор, спойлер)",
          "Лазерна оптика BMW Laserlight із дальністю 600м",
          "20-дюймові ковані різноширокі диски Star-spoke 813 M",
          "Вихлопна система M Sport з регульованими заслінками",
          "Карбоновий дах M Carbon",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Повна оббивка індивідуальною шкірою Merino Silverstone",
          "M сидіння з підігрівом, вентиляцією та активною боковою підтримкою",
          "Автоматичні доводчики дверей (Soft-close)",
          "Скляні органи управління CraftedClarity",
          "4-зонний клімат-контроль та ароматизатор повітря",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Топова акустична система Bowers & Wilkins Diamond Surround (1400 Вт)",
          "Проекційний дисплей BMW Head-Up Display",
          "BMW Live Cockpit Professional з жестковим керуванням",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Пакет Driving Assistant Professional з автономним автопілотом",
          "Камери кругового огляду 360 Surround View з 3D проекцією",
          "Система нічного бачення Night Vision із розпізнаванням пішоходів",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-amg-g63-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_g_class",
    brand: "Mercedes-Benz",
    model: "G-Class",
    trim: "G 63 AMG Magno Night",
    year: 2023,
    price: 248000,
    mileage: 9800,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo AMG",
    powerHp: 585,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "G manufaktur Night Black Magno (матовий)",
    colorInterior: "G manufaktur Nappa Bengal Red / Black",
    vin: "W1N4632761X492018",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-18T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Ікона стилю та потужності — Mercedes-AMG G 63 в ексклюзивному матовому чорному забарвленні Night Black Magno з пакетом AMG Night II. Салон G manufaktur з ромбоподібною прострочкою та карбоновими вставками. 3 блокування диференціалів, вихлоп із боковими трубами, стан нового авто.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет AMG Night II (чорні матові емблеми та радіаторна решітка)",
          "22-дюймові ковані диски AMG у матовому чорному кольорі",
          "Спортивна вихлопна система AMG Performance з кнопкою регулювання",
          "Гальмівні супорти AMG червоного кольору",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Інтер'єр G manufaktur Plus зі шкіри Nappa Bengal Red",
          "Мультиконтурні активні сидіння з масажем, вентиляцією та підігрівом",
          "Стеля оздоблена чорною алькантарою Dinamica",
          "Карбонові декоративні елементи AMG Carbon",
          "Люк з електроприводом",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester Surround Sound System",
          "Подвійний цифровий кокпіт Widescreen Cockpit 12.3",
          "Інтеграція Apple CarPlay / Android Auto",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Пакет систем допомоги водієві з адаптивним круїз-контролем Distronic",
          "Камери 360 з функцією віртуальної прозорості капота",
          "Асистент контролю мертвих зон",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "range-rover-autobiography-p530-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover",
    brand: "Land Rover",
    model: "Range Rover",
    trim: "Autobiography P530 LWB",
    year: 2023,
    price: 215000,
    mileage: 18400,
    fuelType: "petrol",
    engine: "4.4L V8 Twin-Turbo (BMW engine)",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Batumi Gold Satin",
    colorInterior: "Semi-Aniline Perlino Leather",
    vin: "SALWR2V45PA194820",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-28T09:15:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Нове покоління Range Rover у максимальному виконанні Autobiography на подовженій колісній базі (LWB). Повнокероване шасі з поворотом задніх коліс на 7.3 градуса, пневмопідвіска з прогнозуванням рельєфу, представницький задній ряд сидінь Executive Class Comfort-Plus.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Подовжена база LWB (Long Wheelbase)",
          "Цифрові світлодіодні фари Digital LED з проекційними зображеннями",
          "23-дюймові легкосплавні диски Diamond Turned із контрастом Gloss Dark Grey",
          "Висувні дверні ручки з електроприводом та доводчиками",
          "Панорамний скляний дах, що зсувається",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Сидіння Executive Class Comfort-Plus з 24 напрямками регулювання",
          "Масаж гарячими каміннями для всіх чотирьох пасажирів",
          "Шкіра Semi-Aniline кольору Perlino з дерев'яним шпоном Natural Black Birch",
          "Електричні шторки на задніх дверях",
          "Холодильник у передній та задній центральних консолях",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Meridian Signature Sound System (35 динаміків, 1600 Вт)",
          "Екрани мультимедіа 11.4 дюйма для задніх пасажирів",
          "Мультимедійна система Pivi Pro 13.1 дюйма",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Повнокероване шасі з активним підрулюванням задніх коліс",
          "Адаптивна пневмопідвіска Dynamic Response Pro",
          "Камери 3D Surround Camera з оглядом дна авто під час бродів",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "audi-rs6-avant-performance-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_rs6_avant",
    brand: "Audi",
    model: "RS6 Avant",
    trim: "Performance",
    year: 2023,
    price: 169000,
    mileage: 14200,
    fuelType: "petrol",
    engine: "4.0L V8 TFSI BiTurbo Mild Hybrid",
    powerHp: 630,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Nardo Grey (Нардо Грей)",
    colorInterior: "Valcona Black Leather with Blue Stitching",
    vin: "WAUZZZF27PN901241",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-15T15:20:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Audi RS6 Avant у версії Performance зі збільшеною потужністю 630 к.с. та полегшеною шумоізоляцією для ще глибшого звуку V8. Карбон-керамічні гальма з синіми супортами, динамічний повний привід quattro зі спортивним диференціалом, розгін 0-100 км/год за 3.4 секунди.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Версія Performance (+30 к.с. та 850 Нм крутного моменту)",
          "Керамічна гальмівна система RS з синіми супортами",
          "Лазерні фари HD Matrix LED із затемненою маскою",
          "22-дюймові полегшені ковані диски Performance у кольорі Neodymium Gold",
          "Пакет оптики Black Plus",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Спортивні RS-сидіння зі шкіри Valcona з вентиляцією",
          "Дизайнерський пакет RS Blue (сині ремені та прострочка)",
          "Оздоблення керма алькантарою з нульовою міткою",
          "Панорамний скляний дах",
          "Атермальне подвійне скління",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bang & Olufsen 3D Advanced Sound System з акустичними лінзами",
          "Audi Virtual Cockpit Plus зі спеціальним дисплеєм RS Runway",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Повнокероване шасі (динамічне рульове управління всіма колесами)",
          "Спортивна підвіска RS Dynamic Ride Control (DRC)",
          "Асистент нічного бачення",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-taycan-turbo-s-cross-turismo-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_taycan",
    brand: "Porsche",
    model: "Taycan",
    trim: "Turbo S Cross Turismo",
    year: 2023,
    price: 172000,
    mileage: 16800,
    fuelType: "electric",
    engine: "Dual Permanent Magnet Electric Motors",
    powerHp: 761,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Frozen Blue Metallic",
    colorInterior: "Club Leather Olea Basalt Black",
    vin: "WP0AA2Y18PSA99201",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-12T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський електричний крос-універсал Porsche Taycan Turbo S Cross Turismo. 761 к.с. у режимі Overboost, розгін до 100 км/год за 2.9 секунди. Збільшений кліренс, пакет Offroad Design, батарея Performance Battery Plus ємністю 93.4 кВт·год, архітектура 800V для надшвидкої зарядки.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет Offroad Design із карбоновими накладками",
          "21-дюймові диски Cross Turismo Design",
          "Керамічні гальма Porsche Ceramic Composite Brake (PCCB) з жовтими супортами",
          "Панорамний дах із контролем прозорості Sunshine Control",
          "Світлодіодна смуга позаду з тривимірним логотипом Porsche",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Клубна шкіра Olea дублена листям оливи",
          "18-позиційні адаптивні сидіння з масажем та пам'яттю",
          "Пасажирський екран Passenger Display",
          "Чотирьохзонний клімат Advanced Climate Control",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester 3D High-End Surround Sound",
          "Спортивний звук Porsche Electric Sport Sound",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Адаптивна пневмопідвіска з PASM та Smart Lift",
          "Porsche InnoDrive з адаптивним круїз-контролем",
          "Асистент нічного бачення",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-x5-m-competition-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_x5_m",
    brand: "BMW",
    model: "X5 M",
    trim: "Competition F95",
    year: 2023,
    price: 142000,
    mileage: 21500,
    fuelType: "petrol",
    engine: "4.4L V8 M TwinPower Turbo",
    powerHp: 625,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Marina Bay Blue Metallic",
    colorInterior: "Full Leather Merino Taruma Brown",
    vin: "5YMJU0C08P9N20194",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-10T14:40:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Один із найпопулярніших спортивних кросоверів сучасності. BMW X5 M Competition у яскравому кольорі Marina Bay Blue. Автомобіль у рідній фарбі, офіційна сервісна книжка, розгін 0-100 за 3.8 с. Активні стабілізатори поперечної стійкості, диференціал Active M.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "M Sport вихлопна система з чорними насадками",
          "Лазерні фари BMW Laserlight",
          "21/22-дюймові легкосплавні диски Star-spoke 818 M",
          "M Shadow Line з розширеним змістом",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Оздоблення стелі алькантарою кольору антрацит",
          "Мультифункціональні сидіння M з підігрівом, вентиляцією та масажем",
          "Підігрів керма та підлокітників",
          "Термопідстаканники з підігрівом та охолодженням",
          "Панорамний скляний дах Sky Lounge зі світлодіодним підсвічуванням",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Harman Kardon Surround Sound",
          "Бездротова зарядка для смартфона",
          "Управління жестами BMW Gesture Control",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Адаптивна підвіска M Professional",
          "Асистент паркування Plus з камерами кругового огляду",
          "Система активного утримання в смузі",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-s-580-4matic-amg-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_s_class",
    brand: "Mercedes-Benz",
    model: "S-Class",
    trim: "S 580 4MATIC Long AMG Line",
    year: 2023,
    price: 159000,
    mileage: 24000,
    fuelType: "hybrid",
    engine: "4.0L V8 Biturbo Mild Hybrid EQ Boost",
    powerHp: 503,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Obsidian Black Metallic",
    colorInterior: "Exclusive Nappa Sienna Brown",
    vin: "W1K2231761A094182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-05T16:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Еталон представницького комфорту. Mercedes-Benz S 580 Long у стайлінгу AMG Line. Задній пакет Chauffeur із підставкою для ніг, 3D проекційний дисплей із доповненою реальністю, підвіска E-Active Body Control, подрулювання задніх коліс на 10 градусів.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "AMG Line стайлінг кузова",
          "Фари Digital Light з функцією проекції попереджень на дорогу",
          "21-дюймові багатоспицеві диски AMG",
          "Висувні дверні ручки з підсвічуванням",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Пакет Chauffeur: сидіння позаду розкладається у спальне положення",
          "Масаж сидінь із 10 програмами, включаючи підігрів шиї та плечей",
          "Ексклюзивна шкіра Nappa кольору Sienna Brown",
          "Активне фонове підсвічування салону Active Ambient Lighting",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester 3D Surround Sound System",
          "Центральний OLED дисплей 12.8 дюйма з тактильним відгуком",
          "Два окремі планшети MBUX для заднього ряду",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Керування задньою віссю (поворот до 10 градусів)",
          "Фронтальні подушки безпеки для задніх пасажирів",
          "Пакет Driving Assistance з автопілотом 3 рівня (Drive Pilot Ready)",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "lexus-lx-600-vip-2023",

    brand_id: "brand_lexus",

    model_id: "model_lexus_lx",
    brand: "Lexus",
    model: "LX",
    trim: "LX 600 VIP 4-seater",
    year: 2023,
    price: 168000,
    mileage: 19500,
    fuelType: "petrol",
    engine: "3.5L V6 Twin-Turbo",
    powerHp: 415,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Sonic Titanium",
    colorInterior: "Sunflare Semi-Aniline Leather",
    vin: "JTJHW01A404098214",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-02T10:15:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський рамний позашляховик Lexus LX 600 у рідкісній 4-місній конфігурації VIP. Задні капітанські крісла з нахилом до 48 градусів, окрема сенсорна панель керування кліматом та масажем. Неперевершена надійність та розкіш японського інжинірингу.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Виконання VIP (4 окремі комфортабельні крісла)",
          "22-дюймові ковані диски ексклюзивного дизайну",
          "Потрійні світлодіодні фари BladeScan AHS",
          "Гідравлічна підвіска з регулюванням кліренсу Active Height Control (AHC)",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Заднє праве крісло Ottoman з підтримкою гомілок",
          "Шкіра Semi-Aniline кольору Sunflare з декоративними панелями Takanoha",
          "Холодильник у передньому та задньому підлокітниках",
          "Індивідуальні зони клімату Lexus Climate Concierge",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Акустична система Mark Levinson Reference 3D (25 динаміків)",
          "Подвійні екрани для задніх пасажирів діагоналлю 11.6 дюйма",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Комплекс систем безпеки Lexus Safety System+ 2.5",
          "Multi-Terrain Monitor з оглядом простору під днищем",
          "Crawl Control та Multi-Terrain Select",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "tesla-model-s-plaid-2023",

    brand_id: "brand_tesla",

    model_id: "model_tesla_model_s",
    brand: "Tesla",
    model: "Model S",
    trim: "Plaid Tri-Motor",
    year: 2023,
    price: 94000,
    mileage: 18000,
    fuelType: "electric",
    engine: "Tri-Motor All-Wheel Drive with Carbon Sleeves",
    powerHp: 1020,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Midnight Silver Metallic",
    colorInterior: "All Black Premium with Carbon Fiber",
    vin: "5YJSA1E61PF491028",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-29T13:45:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Найшвидший серійний седан у світі. Tesla Model S Plaid потужністю 1020 к.с. Розгін від 0 до 100 км/год за 2.1 секунди, максимальна швидкість 322 км/год. Штурвал Yoke, європейський порт CCS Combo 2, Full Self-Driving (FSD) активований.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Тримоторна силова установка Plaid з карбоновими роторами",
          "21-дюймові колісні диски Arachnid",
          "Вуглепластиковий задній спойлер",
          "Повністю скляний тонований дах",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Кермо-штурвал Yoke Steering",
          "Оздоблення салону матовим карбоном",
          "Вентиляція та підігрів усіх сидінь",
          "Трьохзонний клімат-контроль Air Wave",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Центральний екран 17 дюймів із поворотом вліво/вправо (2200x1300)",
          "Преміальна аудіосистема 22 динаміки (960 Вт) з активним шумозаглушенням",
          "Геймінг-комп'ютер потужністю 10 терафлопс для консольних ігор",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Full Self-Driving Computer (Hardware 4)",
          "Автопарковка та функція виклику Smart Summon",
          "Адаптивна пневмопідвіска з пам'яттю локацій за GPS",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-cayenne-coupe-turbo-gt-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_cayenne_coupe",
    brand: "Porsche",
    model: "Cayenne Coupe",
    trim: "Turbo GT",
    year: 2023,
    price: 228000,
    mileage: 8900,
    fuelType: "petrol",
    engine: "4.0L V8 Twin-Turbo GT",
    powerHp: 640,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Arctic Grey",
    colorInterior: "Black Alcantara / GT Interior Package Neodyme",
    vin: "WP1AA2AY5PDA91048",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-27T17:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Рекордсмен Нюрбургринга серед серійних SUV — Porsche Cayenne Coupe Turbo GT. 640 кінських сил, центральний титановий вихлоп, карбоновий дах, керамічні гальма PCCB у стандарті. 0-100 км/год за неймовірні 3.3 секунди.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Полегшений дах із карбону",
          "Титанова спортивна вихлопна система з центральними патрубками",
          "22-дюймові диски GT Design у кольорі Neodyme",
          "Керамічні гальма Porsche Ceramic Composite Brake (PCCB)",
          "Активний карбоновий задній спойлер із висуванням на високій швидкості",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Спортивні сидіння Turbo GT з оббивкою Alcantara та контрастними швами Neodyme",
          "Кермо GT Sports в алькантарі з перемикачем режимів і кнопкою Sport Response",
          "Карбонові накладки на пороги з підсвічуванням",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester 3D High-End Surround Sound",
          "Apple CarPlay з повною бездротовою інтеграцією",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Активна система стабілізації кренів Porsche Dynamic Chassis Control (PDCC)",
          "Керована задня вісь",
          "Адаптивний круїз з функцією Stop&Go",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-m4-competition-xdrive-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m4_coupe",
    brand: "BMW",
    model: "M4 Coupe",
    trim: "Competition M xDrive",
    year: 2023,
    price: 108000,
    mileage: 15400,
    fuelType: "petrol",
    engine: "3.0L BMW M TwinPower Turbo Inline-6",
    powerHp: 510,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "Isle of Man Green Metallic",
    colorInterior: "Full Merino Kyalami Orange / Black",
    vin: "WBA43AZ02PFP91823",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-25T11:20:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Культове купе в найбажанішому поєднанні: колір Isle of Man Green та салон Kyalami Orange з карбоновими ковшами M Carbon. Повний привід M xDrive з режимом 2WD для заднього приводу. Офіційна європейська гарантія.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "M Carbon ковшеподібні сидіння M Carbon Bucket Seats",
          "Лазерні фари BMW Laserlight",
          "19/20-дюймові ковані диски M Double-spoke 826 M Black",
          "Карбоновий дах M Carbon Roof",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Шкіряна панель приладів Sensatec / Merino",
          "Карбонові пелюстки перемикання передач та вставки",
          "Двозонний клімат-контроль",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Вигнутий дисплей BMW Curved Display з ОС BMW 8.5",
          "Аудіосистема Harman Kardon",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "M Drive Professional з аналізатором M Drift та M Laptimer",
          "Камери 360 Parking Assistant Plus",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "audi-q8-55-tfsi-sline-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_q8",
    brand: "Audi",
    model: "Q8",
    trim: "55 TFSI quattro S line Black Edition",
    year: 2023,
    price: 92000,
    mileage: 26000,
    fuelType: "petrol",
    engine: "3.0L V6 TFSI Mild Hybrid",
    powerHp: 340,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Mythos Black Metallic",
    colorInterior: "Valcona Black S line with Rock Grey Stitching",
    vin: "WAUZZZF16PD049182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-20T10:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Купе-кросовер преміум-класу Audi Q8 у пакеті Black Edition. Безрамкові двері, адаптивна пневмопідвіска, матричні фари HD Matrix LED. Один власник, куплений новим в офіційного дилера у Відні, обслуговувався виключно за регламентом.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет зовнішнього оздоблення Black Edition",
          "22-дюймові диски Audi Sport 5 V-spoke star",
          "Матрична оптика HD Matrix LED з динамічними поворотниками",
          "Панорамний дах",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Спортивні сидіння S з інтегрованими підголівниками",
          "Шкіра Valcona з тисненням S",
          "Вентиляція та підігрів передніх сидінь",
          "Пакет контурного підсвічування салону Ambiente Plus",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bang & Olufsen Premium 3D Sound",
          "Audi Smartphone Interface",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Адаптивна пневматична підвіска",
          "Круговий огляд 360 Top View",
          "Асистент зміни смуги руху Audi Side Assist",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-amg-gt-63-s-4door-2022",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_amg_gt",
    brand: "Mercedes-Benz",
    model: "AMG GT",
    trim: "63 S 4MATIC+ 4-Door Coupe",
    year: 2022,
    price: 145000,
    mileage: 28900,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo AMG",
    powerHp: 639,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Designo Selenite Grey Magno",
    colorInterior: "Exclusive Nappa Black / Magma Grey",
    vin: "W1K2906891A019482",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-18T16:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Чотирьохдверне купе суперкарного рівня. Mercedes-AMG GT 63 S з потужністю 639 к.с. та 900 Нм крутного моменту. Дрифт-режим, активне антикрило, карбоновий аеропакет AMG. Обслуговування тільки на офіційній станції AMG.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Аеродинамічний пакет AMG Carbon II",
          "21-дюймові ковані диски AMG у хрестоподібному дизайні",
          "Керамічна гальмівна система AMG",
          "Вихлоп AMG Performance з електронним регулюванням тембру",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Крісла AMG Performance з електрорегулюванням та пам'яттю",
          "Кермо AMG Performance з карбоном та кнопками вибору режимів",
          "Стеля з чорної мікрофібри Dinamica",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester High-End 3D Surround",
          "AMG Track Pace (телеметрія для гоночних трас)",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Керована задня вісь AMG Rear Axle Steering",
          "Пневматична підвіска AMG Ride Control+",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "range-rover-sport-first-edition-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover_sport",
    brand: "Land Rover",
    model: "Range Rover Sport",
    trim: "First Edition P530",
    year: 2023,
    price: 162000,
    mileage: 19800,
    fuelType: "petrol",
    engine: "4.4L V8 Twin-Turbo",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Firenze Red Metallic / Black Roof",
    colorInterior: "Semi-Aniline Deep Garnet / Ebony",
    vin: "SALWR3V42PA093182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-14T09:30:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Нове покоління Range Rover Sport у лімітованій серії First Edition. Спортивна динаміка, штормовий V8 бітурбо, динамічна пневмопідвіска з регульованими двокамерними амортизаторами, система керування всіма колесами.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Лімітована версія First Edition",
          "23-дюймові диски Style 5135 у кольорі Gloss Black",
          "Двоколірне забарвлення з дахом Narvik Black",
          "Цифрові світлодіодні фари Digital LED",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "22-позиційні передні сидіння з пам'яттю та масажем",
          "Шкіра Semi-Aniline глибокого бордового відтінку",
          "Оздоблення матовим карбоном Forged Carbon",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Меридіан 3D Surround Sound з динаміками в підголівниках",
          "Pivi Pro з інтеграцією Amazon Alexa",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Система Stormer Handling Pack з активним диференціалом",
          "Підрулювання задньої осі",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "volvo-xc90-t8-ultimate-dark-2023",

    brand_id: "brand_volvo",

    model_id: "model_volvo_xc90",
    brand: "Volvo",
    model: "XC90",
    trim: "Recharge T8 Ultimate Dark AWD",
    year: 2023,
    price: 84000,
    mileage: 22400,
    fuelType: "plug_in_hybrid",
    engine: "2.0L Turbo + Electric Motor Plug-in",
    powerHp: 455,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Onyx Black Metallic",
    colorInterior: "Perforated Nappa Charcoal / Slate",
    vin: "YV4A22PK4P1982301",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-10T14:15:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський 7-місний скандинавський кросовер у найпотужнішій версії T8 Recharge (455 к.с.). До 70 км виключно на електротязі. Пневматична підвіска Four-C, кришталевий селектор Orrefors, легендарна безпека Volvo.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет темного декору Ultimate Dark",
          "22-дюймові легкосплавні диски Black Diamond Cut",
          "Фари 'Молот Тора' з активним затіненням",
          "7-місна конфігурація салону",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Кришталевий важіль КПП ручної роботи Orrefors",
          "Вентильовані сидіння з натуральної шкіри Nappa з масажем",
          "Система очищення повітря Advanced Air Cleaner з фільтрацією PM2.5",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bowers & Wilkins з акустикою концертного залу Гетеборга",
          "Google Built-in (карти Google, асистент та Play Store)",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Pilot Assist (напівавтономне водіння)",
          "Камери 360 градусів з датчиками перехресного руху",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "volkswagen-touareg-r-line-30-tdi-2023",

    brand_id: "brand_volkswagen",

    model_id: "model_volkswagen_touareg",
    brand: "Volkswagen",
    model: "Touareg",
    trim: "R-Line 3.0 V6 TDI Black Style",
    year: 2023,
    price: 78000,
    mileage: 31000,
    fuelType: "diesel",
    engine: "3.0L V6 TDI",
    powerHp: 286,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Siliziumgrau Metallic",
    colorInterior: "Savona Black Leather R-Line",
    vin: "WVGZZZCR7PD098172",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-08T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Преміальний німецький позашляховик на платформі MLB Evo (спільній з Porsche Cayenne та Bentley Bentayga). Економічний та тяговитий турбодизель 3.0 TDI 286 к.с. з витратою 7.5 л на 100 км по трасі. Повне подрулювання задньої осі.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет R-Line з антихром пакетом Black Style",
          "21-дюймові диски Suzuka у глянцевому чорному кольорі",
          "Матричні фари IQ.Light LED Matrix",
          "Пневматична підвіска з електронним регулюванням кліренсу до 26 см",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Innovision Cockpit з гігантським 15-дюймовим сенсорним дисплеєм",
          "Ергономічні сидіння ergoComfort з масажем та вентиляцією",
          "Доводчики дверей",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Преміальна акустика Dynaudio Consequence (730 Вт)",
          "Бездротовий Apple CarPlay та Android Auto",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Повнокероване шасі задніх коліс",
          "Нічне бачення Night Vision",
          "Асистент руху в заторах Traffic Jam Assist",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "toyota-land-cruiser-300-gr-sport-2023",

    brand_id: "brand_toyota",

    model_id: "model_toyota_land_cruiser_300",
    brand: "Toyota",
    model: "Land Cruiser 300",
    trim: "GR-Sport 3.5 Twin-Turbo",
    year: 2023,
    price: 119000,
    mileage: 16500,
    fuelType: "petrol",
    engine: "3.5L V6 Twin-Turbo",
    powerHp: 415,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Precious White Pearl",
    colorInterior: "GR Black / Dark Red Leather",
    vin: "JTMHA01J704098192",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-02T13:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Спеціальна спортивна версія культового рамника — Land Cruiser 300 GR Sport. Оснащений електронно-керованою кінетичною підвіскою E-KDSS з розмиканням стабілізаторів, трьома жорсткими блокуваннями диференціалів (переднє, міжосьове, заднє).",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Ексклюзивний обвіс GR Sport та решітка з ретро-написом TOYOTA",
          "Система електронної кінетичної стабілізації E-KDSS",
          "18-дюймові диски GR Sport у матовому сірому відтінку",
          "3 механічні блокування диференціалів",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Спортивні сидіння GR з тисненням емблеми на підголівниках",
          "Вентиляція та підігрів першого та другого рядів сидінь",
          "Холодильник у центральному боксі",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема JBL Premium з 14 динаміками та сабвуфером",
          "Дисплей 12.3 дюйма з круговим оглядом Multi-Terrain Monitor",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Toyota Safety Sense з адаптивним радаром",
          "Crawl Control та Turn Assist",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "audi-e-tron-gt-rs-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_e_tron_gt",
    brand: "Audi",
    model: "e-tron GT",
    trim: "RS quattro Carbon Edition",
    year: 2023,
    price: 139000,
    mileage: 14900,
    fuelType: "electric",
    engine: "Dual Electric Synchronous Motors",
    powerHp: 646,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Daytona Grey Pearl Effect",
    colorInterior: "Fine Nappa Black with Express Red Honeycomb",
    vin: "WAUZZZFW9PN019284",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-25T14:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Шедевр аеродинамічного дизайну — електричний гран-туризмо Audi RS e-tron GT. 646 к.с. у режимі boost, 0-100 за 3.3 секунди. Карбоновий дах, керамічні гальма, спортивне звучання e-sound з зовнішніми динаміками.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Карбоновий дах та карбонові накладки дзеркал",
          "Лазерні матричні фари з синіми світловими акцентами",
          "21-дюймові диски RS у 5-подвійному спицевому дизайні",
          "Гальма з покриттям із карбіду вольфраму (PSCB)",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "RS сидіння Pro з перфорацією та ромбовидною строчкою",
          "Кермо в алькантарі зі зрізаним низом",
          "Панорамне скло з високим ступенем термозахисту",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bang & Olufsen 3D Sound",
          "Зовнішній синтезатор звуку Audi e-sound",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Адаптивна трьохкамерна пневмопідвіска",
          "Повнокероване шасі",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-i7-xdrive60-m-sport-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_i7",
    brand: "BMW",
    model: "i7",
    trim: "xDrive60 M Sport Individual",
    year: 2023,
    price: 135000,
    mileage: 11000,
    fuelType: "electric",
    engine: "Dual Electrically Excited Synchronous Motors",
    powerHp: 544,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Two-Tone Black Sapphire / Oxide Grey",
    colorInterior: "BMW Individual Smoke White Leather / Cashmere",
    vin: "WBA23EJ05PCF81920",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-29T10:00:00Z",
    location: "В дорозі з Німеччини (очікується 5 днів)",
    description:
      "Флагман цифрової епохи — BMW i7 у рідкісному двоколірному забарвленні Two-Tone. Гігантський 31.3-дюймовий екран BMW Theatre Screen для задніх пасажирів з роздільною здатністю 8K. Автоматичні двері, кашеміровий салон.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Двоколірне ексклюзивне фарбування кузова Two-Tone",
          "Кришталеві фари BMW Iconic Glow з кристалами Swarovski",
          "21-дюймові аеродинамічні диски M Individual",
          "Автоматичні двері з електроприводом відкриття та закриття",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "BMW Theatre Screen 31.3 дюйма 8K, що опускається зі стелі",
          "Салон із натуральної вовни та кашеміру в поєднанні зі шкірою Merino",
          "Сидіння Executive Lounge з підтримкою ніг",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bowers & Wilkins Diamond 4D Surround (36 динаміків, 1965 Вт)",
          "Сенсорні пульти керування у задніх дверних картах Touch Command",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Активне підрулювання задньої осі Integral Active Steering",
          "Професійний асистент паркування з маневруванням зі смартфона",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-panamera-gts-sport-turismo-2022",

    brand_id: "brand_porsche",

    model_id: "model_porsche_panamera",
    brand: "Porsche",
    model: "Panamera",
    trim: "GTS Sport Turismo",
    year: 2022,
    price: 138000,
    mileage: 34500,
    fuelType: "petrol",
    engine: "4.0L V8 Twin-Turbo",
    powerHp: 480,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Carmine Red",
    colorInterior: "GTS Alcantara / Leather Package Carmine Red",
    vin: "WP0AB2A75NLA89120",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-09-01T15:30:00Z",
    location: "В дорозі з Франкфурта (очікується 3 дні)",
    description:
      "Універсал спортивного характеру Porsche Panamera GTS Sport Turismo. Харизматичний бітурбований V8, спортивна вихлопна система, затемнена оптика SportDesign, ідеальний баланс комфорту в далеких подорожах і динаміки на серпантинах.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет SportDesign у чорному глянцевому кольорі",
          "21-дюймові диски Panamera Exclusive Design Sport",
          "Спортивна вихлопна система GTS з чорними здвоєними насадками",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "18-позиційні адаптивні сидіння GTS з комбінацією шкіри та Race-Tex",
          "Червоні циферблати та ремені безпеки Carmine Red",
          "Панорамний дах",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема BOSE Surround Sound",
          "Бездротова зарядка та Apple CarPlay",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Porsche Torque Vectoring Plus (PTV Plus)",
          "Круїз-контроль з утриманням дистанції",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-amg-gle-63-s-coupe-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_gle_coupe",
    brand: "Mercedes-Benz",
    model: "GLE Coupe",
    trim: "GLE 63 S AMG 4MATIC+",
    year: 2023,
    price: 151000,
    mileage: 18200,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo AMG EQ Boost",
    powerHp: 612,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Emerald Green Metallic",
    colorInterior: "AMG Nappa Exclusive Macchiato Beige / Black",
    vin: "4JGDA7EB3PB102938",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-08-28T16:00:00Z",
    location: "В дорозі зі Швейцарії (очікується 7 днів)",
    description:
      "Потужний купе-кросовер у вишуканому смарагдовому кольорі Emerald Green зі світлим салоном AMG Nappa. 612 к.с., активна гідравлічна підвіска AMG Active Ride Control з гасінням кренів, ковані диски AMG 22 дюйми.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет AMG Night",
          "22-дюймові ковані диски AMG у матовому чорному виконанні",
          "Спортивна вихлопна система AMG Performance",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Салон AMG Nappa Exclusive світлого бежевого кольору Macchiato",
          "Вентиляція та підігрів сидінь, масаж ENERGIZING",
          "Панорамний дах зі зсувною секцією",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester Surround Sound",
          "MBUX з голосовим керуванням 'Hey Mercedes'",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "AMG Active Ride Control з активними 48V стабілізаторами",
          "Пакет допомоги водієві Plus",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "lexus-lc-500-v8-coupe-2022",

    brand_id: "brand_lexus",

    model_id: "model_lexus_lc",
    brand: "Lexus",
    model: "LC",
    trim: "LC 500 V8 Sport+",
    year: 2022,
    price: 95000,
    mileage: 19200,
    fuelType: "petrol",
    engine: "5.0L Naturally Aspirated V8",
    powerHp: 477,
    transmission: "automatic",
    drive: "rear_wheel",
    bodyType: "coupe",
    colorExterior: "Infrared Pearl",
    colorInterior: "Ochre Alcantara / Tan Semi-Aniline Leather",
    vin: "JTHHW5BY2N5019284",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-08-22T10:45:00Z",
    location: "В дорозі з Бельгії (очікується 6 днів)",
    description:
      "Справжній витвір автомобільного мистецтва. Lexus LC 500 з атмосферним японським 5.0-літровим V8 на 477 к.с., який звучить як класичні спорткари. Карбоновий дах, активне заднє антикрило, задній самоблокувальний диференціал Torsen.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет Sport+ з карбоновим дахом",
          "21-дюймові ковані диски двоколірного дизайну",
          "Висувне заднє антикрило, що піднімається на швидкості 80 км/год",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Спортивні сидіння Alcantara / Semi-Aniline у кольорі Ochre",
          "Дверні карти з хвилеподібними драпіруваннями Alcantara",
          "Аналоговий годинник на приладовій панелі",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Mark Levinson Reference Surround Sound (13 динаміків)",
          "Ковзний оптичний тахометр у стилі суперкара LFA",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Повнокероване шасі Lexus Dynamic Handling (LDH)",
          "Диференціал підвищеного тертя Torsen LSD",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-m5-competition-f90-lci-2022",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m5",
    brand: "BMW",
    model: "M5",
    trim: "Competition F90 LCI",
    year: 2022,
    price: 118000,
    mileage: 32000,
    fuelType: "petrol",
    engine: "4.4L V8 M TwinPower Turbo",
    powerHp: 625,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Alvit Grey Metallic",
    colorInterior: "Full Merino Silverstone with Black Contrast",
    vin: "WBAJF0109NCH91823",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-15T12:00:00Z",
    location: "Продано клієнту (Київ)",
    description:
      "Рестайлінговий BMW M5 Competition LCI. 625 кінських сил, повний привід M xDrive з режимом чистого заднього приводу 2WD. Автомобіль успішно підібраний та доставлений компанією REZAR GROUP для постійного клієнта. Приклад виконаного замовлення.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "M Carbon керамічна гальмівна система із золотими супортами",
          "Лазерні фари BMW Laserlight з темними масками Shadow Line",
          "20-дюймові легкосплавні диски Y-spoke 789 M Bicolour",
          "M Sport вихлопна система",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "M багатофункціональні сидіння з підсвічуваним логотипом M5",
          "Доводчики дверей",
          "Чотиризонний клімат-контроль",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Bowers & Wilkins Diamond Surround Sound",
          "Проекційний дисплей M Head-Up Display",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Driving Assistant Professional",
          "Камери 360 Surround View",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-cayenne-coupe-platinum-2022",

    brand_id: "brand_porsche",

    model_id: "model_porsche_cayenne_coupe",
    brand: "Porsche",
    model: "Cayenne Coupe",
    trim: "Platinum Edition",
    year: 2022,
    price: 99000,
    mileage: 38000,
    fuelType: "petrol",
    engine: "3.0L V6 Turbo",
    powerHp: 340,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Jet Black Metallic",
    colorInterior: "Standard Leather Black / Mojave Beige",
    vin: "WP1AA2AY9NDA90184",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-06-10T14:00:00Z",
    location: "Продано клієнту (Львів)",
    description:
      "Стильний Porsche Cayenne Coupe у виконанні Platinum Edition. Спортивні вихлопні патрубки, 21-дюймові диски RS Spyder Design у матовому платиновому кольорі Satin Platinum. Автомобіль передано новому власнику з повною гарантією перевірки.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет Platinum Edition з акцентами Satin Platinum",
          "21-дюймові диски RS Spyder Design",
          "Панорамний фіксований скляний дах",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Комфортні 14-позиційні сидіння з пам'яттю",
          "Ремені безпеки кольору Crayon",
          "Тиснення герба Porsche на підголівниках",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема BOSE Surround Sound",
          "Apple CarPlay",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Асистент паркування ParkAssist з камерою заднього виду",
          "Адаптивна пневматична підвіска PASM",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-amg-c63-s-coupe-2021",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_c_class_coupe",
    brand: "Mercedes-Benz",
    model: "C-Class Coupe",
    trim: "C 63 S AMG Final Edition V8",
    year: 2021,
    price: 82000,
    mileage: 39500,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo AMG (One Man, One Engine)",
    powerHp: 510,
    transmission: "automatic",
    drive: "rear_wheel",
    bodyType: "coupe",
    colorExterior: "Iridium Silver Metallic",
    colorInterior: "AMG Nappa Black with Yellow Contrast Stitching",
    vin: "WDD2053871F901248",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-05-18T10:00:00Z",
    location: "Продано клієнту (Одеса)",
    description:
      "Останнє покоління купе С-класу зі справжнім 4.0L V8 бітурбо. 510 к.с., задній привід, електронне блокування диференціалу. Рідкісний екземпляр у колекційному стані, який більше не випускається виробником.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "AMG Night пакет",
          "19/20-дюймові ковані диски AMG у матовому чорному забарвленні",
          "AMG Performance вихлопна система",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Крісла AMG Performance з бічною фіксацією",
          "Жовті акценти та ремені безпеки Edition",
          "Панорамний скляний люк",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester Surround",
          "Цифрова приладова панель 12.3",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Електронне блокування заднього диференціала AMG",
          "Адаптивна підвіска AMG Ride Control",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "range-rover-velar-r-dynamic-hse-2022",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover_velar",
    brand: "Land Rover",
    model: "Range Rover Velar",
    trim: "R-Dynamic HSE P380",
    year: 2022,
    price: 69000,
    mileage: 44000,
    fuelType: "petrol",
    engine: "3.0L V6 Supercharged",
    powerHp: 380,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Hakuba Silver Metallic",
    colorInterior: "Windsor Leather Light Oyster / Ebony",
    vin: "SALYA2V69NA019283",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-04-12T16:20:00Z",
    location: "Продано клієнту (Харків)",
    description:
      "Переможець премії 'Світовий автомобільний дизайн року'. Range Rover Velar у топовій комплектації R-Dynamic HSE. Спеціальне замовлення з компресорним V6, подвійними сенсорними екранами Touch Pro Duo та акустикою Meridian 825W.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет R-Dynamic з мідними акцентами Burnished Copper",
          "21-дюймові диски Style 5047 Gloss Sparkle Silver",
          "Матрично-лазерні фари",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Сидіння з преміальної шкіри Windsor з 20 регулюваннями та масажем",
          "Панорамний дах",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Meridian Surround Sound System 825 Вт",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Пневматична підвіска з регулюванням висоти",
          "Terrain Response 2",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-x7-m60i-xdrive-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_x7",
    brand: "BMW",
    model: "X7",
    trim: "M60i xDrive LCI",
    year: 2023,
    price: 158000,
    mileage: 16200,
    fuelType: "petrol",
    engine: "4.4L V8 M TwinPower Turbo Mild-Hybrid",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Dravit Grey Metallic",
    colorInterior: "BMW Individual Merino Tartufo",
    vin: "5YM23EM00P9R81920",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-23T11:40:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський 6-місний повнорозмірний кросовер BMW X7 M60i після рестайлінгу. Роздільна оптика BMW Iconic Glow, 530 к.с., активна стабілізація Executive Drive Pro, комфортні капітанські крісла другого ряду.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Решітка радіатора BMW Iconic Glow з підсвічуванням",
          "22-дюймові M легкосплавні диски V-spoke 755 M",
          "Спортивна вихлопна система M з чотирма патрубками",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "6-місна конфігурація з окремими капітанськими кріслами другого ряду",
          "Скляний дах Panorama Sky Lounge зі світлодіодними зірками",
          "Оздоблення салону шкірою Tartufo Merino",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Bowers & Wilkins Diamond Surround Sound System (20 динаміків, 1475 Вт)",
          "BMW Live Cockpit Professional з вигнутим дисплеєм",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Активна підвіска Executive Drive Pro з активними стабілізаторами",
          "Інтегральне активне рульове управління",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-macan-gts-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_macan",
    brand: "Porsche",
    model: "Macan",
    trim: "GTS Facelift III",
    year: 2023,
    price: 98000,
    mileage: 18400,
    fuelType: "petrol",
    engine: "2.9L V6 Twin-Turbo",
    powerHp: 440,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Python Green",
    colorInterior: "GTS Interior Package Python Green / Race-Tex",
    vin: "WP1AA2A59PLB90182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-12T10:10:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Найдинамічніший компактний кросовер у світі. Porsche Macan GTS в ексклюзивному кольорі Python Green. 440 к.с., спортхроно, занижена на 10 мм спортивна пневмопідвіска, гальма з покриттям PSCB. Захоплююча керованість спорткара.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет Macan GTS Sport Package",
          "21-дюймові диски GT Design у матовому чорному забарвленні",
          "Спортивна вихлопна система GTS",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "18-позиційні сидіння з оздобленням Race-Tex та контрастною прострочкою Python Green",
          "Карбоновий салонний пакет",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема BOSE Surround Sound",
          "Porsche Communication Management (PCM) 10.9",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Пневматична підвіска з PASM та заниженням кліренсу",
          "Система перерозподілу крутного моменту Porsche Torque Vectoring Plus",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "audi-rs7-sportback-performance-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_rs7",
    brand: "Audi",
    model: "RS7",
    trim: "Performance 630 hp",
    year: 2023,
    price: 174000,
    mileage: 11200,
    fuelType: "petrol",
    engine: "4.0L V8 TFSI BiTurbo Mild Hybrid",
    powerHp: 630,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Glacier White Metallic / Black Pack",
    colorInterior: "Valcona Black / Red RS Honeycomb",
    vin: "WAUZZZF28PN981029",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-21T09:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Чотирьохдверне купе виняткової потужності. Audi RS7 Sportback у спецверсії Performance (630 к.с., 850 Нм). 0-100 км/год за 3.4 секунди. Карбон-керамічні гальма, спортивна вихлопна система RS, повнокероване шасі.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет RS Dynamic Package Plus (максимальна швидкість 305 км/год)",
          "Керамічні гальма RS з червоними супортами",
          "Лазерна оптика HD Matrix LED із затемненням",
          "22-дюймові полегшені ковані диски в матовому чорному забарвленні",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "RS сидіння зі шкіри Valcona з вентиляцією",
          "Дизайнерський пакет RS Red (червоні ремені, кермо з червоною міткою)",
          "Доводчики дверей",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Bang & Olufsen Advanced Sound System з акустичними лінзами",
          "Audi Virtual Cockpit Plus",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Повнокероване шасі",
          "Спортивний диференціал quattro",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-amg-sl-63-4matic-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_sl_class",
    brand: "Mercedes-Benz",
    model: "SL-Class",
    trim: "SL 63 AMG 4MATIC+ Roadster",
    year: 2023,
    price: 189000,
    mileage: 6400,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo AMG",
    powerHp: 585,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "cabriolet",
    colorExterior: "Manufaktur Opalite White Bright",
    colorInterior: "Exclusive Nappa Black / Red Pepper",
    vin: "W1K2324881F019284",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-04T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Нове покоління культового родстера SL, розроблене безпосередньо в Аффальтербаху підрозділом AMG. Класичний м'який складаний дах, повний привід 4MATIC+, 585 кінських сил, шарф підігріву шиї AIRSCARF.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Тришаровий акустичний складаний дах (складається за 15 секунд на швидкості до 60 км/год)",
          "21-дюймові ковані диски AMG",
          "Пакет AMG Aerodynamics",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "Система AIRSCARF (теплий шарф для шиї у прохолодну погоду)",
          "Центральний дисплей з регульованим кутом нахилу для уникнення відблисків сонця",
          "Мультиконтурні сидіння з масажем",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Burmester High-End 3D Surround Sound",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Підвіска AMG Active Ride Control з гідравлічною стабілізацією",
          "Керована задня вісь",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-i4-m50-gran-coupe-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_i4",
    brand: "BMW",
    model: "i4",
    trim: "M50 Gran Coupe",
    year: 2023,
    price: 68000,
    mileage: 23100,
    fuelType: "electric",
    engine: "Dual Electric Motors (BMW eDrive 5th Gen)",
    powerHp: 544,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Sanremo Green Metallic",
    colorInterior: "Vernasca Cognac Leather with Contrast Stitching",
    vin: "WBA33AW05PFP01928",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-30T14:30:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Перший повністю електричний Gran Coupe від BMW M GmbH. 544 к.с., розгін до 100 км/год за 3.9 секунди. Запас ходу до 520 км. Ідеальний баланс динаміки спортседана BMW та повсякденної практичності кузова ліфтбек.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет M Technology з посиленими гальмами M Sport",
          "19-дюймові M аеродинамічні диски Bicolour",
          "Лазерна оптика BMW Laserlight",
        ],
      },
      {
        category: "Комфорт та салон",
        items: [
          "BMW Curved Display (12.3 + 14.9 дюймів)",
          "Спортивні сидіння M зі шкіри Vernasca кольору коньяк",
          "Скляний люк з електроприводом",
        ],
      },
      {
        category: "Мультимедіа та звук",
        items: [
          "Аудіосистема Harman Kardon",
          "Звуковий супровід BMW IconicSounds Electric від композитора Ганса Ціммера",
        ],
      },
      {
        category: "Безпека та асистенти",
        items: [
          "Адаптивна M підвіска",
          "Асистент паркування Plus з круговим оглядом",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "audi-rs7-performance-2024",

    brand_id: "brand_audi",

    model_id: "model_audi_rs7",
    brand: "Audi",
    model: "RS7",
    trim: "Performance",
    year: 2024,
    price: 165000,
    mileage: 2800,
    fuelType: "petrol",
    engine: "4.0L V8 TFSI Twin-Turbo Mild-Hybrid",
    powerHp: 630,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Nardo Grey",
    colorInterior: "Valcona Black Leather with RS Red Stitching",
    vin: "WAUZZZF27RA089123",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-29T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський спортивний ліфтбек Audi RS7 Performance 2024 року. Потужність 630 к.с., розгін до 100 км/год за 3.4 секунди. Карбон-керамічні гальма RS, спортивна вихлопна система RS, динамічне повнокероване шасі.",
    features: [
      {
        category: "Комплектація та екстер'єр",
        items: [
          "Пакет RS Dynamic plus з розблокованою швидкістю 305 км/год",
          "Керамічна гальмівна система RS з синіми супортами",
          "22-дюймові ковані матові диски 5-Y-spoke",
          "HD Matrix LED оптика з лазерним дальнім світлом Audi Laser Light",
        ],
      },
      {
        category: "Комфорт та мультимедіа",
        items: [
          "Аудіосистема Bang & Olufsen Advanced Sound System з 3D-звуком",
          "Спортивні сидіння RS з вентиляцією та масажем",
          "Проекційний дисплей на лобове скло (HUD)",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "bmw-ix-m60-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_ix",
    brand: "BMW",
    model: "iX",
    trim: "M60",
    year: 2023,
    price: 99000,
    mileage: 18500,
    fuelType: "electric",
    engine: "Dual Electric Motors (eDrive)",
    powerHp: 619,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Aventurine Red III Metallic",
    colorInterior: "Castanea Natural Leather",
    vin: "WBACF0C07PCK98124",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-09-15T09:20:00Z",
    location: "В дорозі з Мюнхена до Києва",
    description:
      "Топовий електричний SUV від підрозділу BMW M. 619 к.с. та неймовірні 1100 Нм крутного моменту в режимі Launch Control. Запас ходу до 560 км WLTP. Пневмопідвіска обох осей, інтегральне активне рульове управління.",
    features: [
      {
        category: "Технології та ходова",
        items: [
          "Адаптивна 2-вісна пневмопідвіска з налаштуваннями M",
          "Повнокероване шасі Integral Active Steering",
          "Аудіосистема Bowers & Wilkins Diamond Surround 4D Sound (30 динаміків)",
          "Панорамний дах Sky Lounge з електрохромним затемненням",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "mercedes-gle-53-amg-2021",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_gle",
    brand: "Mercedes-Benz",
    model: "GLE",
    trim: "53 AMG 4MATIC+",
    year: 2021,
    price: 84000,
    mileage: 56000,
    fuelType: "hybrid",
    engine: "3.0L Turbo Inline-6 + EQ Boost",
    powerHp: 435,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Obsidian Black Metallic",
    colorInterior: "Nappa Black Leather",
    vin: "W1N1671611A391820",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-10T16:00:00Z",
    location: "Передано клієнту (Київ)",
    description:
      "Автомобіль успішно підібрано та доставлено на замовлення клієнта з офіційного дилерського центру в Штутгарті. Повна сервісна історія, один власник у Німеччині.",
    features: [
      {
        category: "Комплектація",
        items: [
          "Пакет AMG Night",
          "Аудіосистема Burmester Surround Sound",
          "Спортивна пневмопідвіска AMG RIDE CONTROL+",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-taycan-4s-cross-turismo-2022",

    brand_id: "brand_porsche",

    model_id: "model_porsche_taycan",
    brand: "Porsche",
    model: "Taycan",
    trim: "4S Cross Turismo",
    year: 2022,
    price: 108000,
    mileage: 24500,
    fuelType: "electric",
    engine: "Dual Permanent Magnet Motors (Performance Battery Plus)",
    powerHp: 571,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Ice Grey Metallic",
    colorInterior: "Black / Chalk Two-Tone Smooth-Finish Leather",
    vin: "WP0AA2Y14NSA91823",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-28T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Універсальний електроспорткар Porsche Taycan Cross Turismo з пакетом Offroad Design. Батарея Performance Plus 93.4 кВт·год, пневмопідвіска з регулюванням кліренсу Smartlift, панорамний скляний дах.",
    features: [
      {
        category: "Оснащення",
        items: [
          "Пакет Offroad Design з накладками кузова",
          "Performance Battery Plus 93.4 кВт·год",
          "Панорамний фіксований скляний дах",
          "Аудіосистема BOSE Surround Sound",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "land-rover-defender-110-v8-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_defender",
    brand: "Land Rover",
    model: "Defender",
    trim: "110 Carpathian Edition V8",
    year: 2023,
    price: 142000,
    mileage: 9800,
    fuelType: "petrol",
    engine: "5.0L Supercharged V8",
    powerHp: 525,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Carpathian Grey Metallic with Satin Protective Film",
    colorInterior: "Ebony Windsor Leather with Dinamica Suedecloth",
    vin: "SALWR2V45PA189201",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-27T15:40:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманська версія Defender Carpathian Edition з компресорним мотором 5.0L V8 на 525 к.с. Заводська захисна матова плівка Satin Protective Film, чорний контрастний дах, капот і двері багажника Narvik Black.",
    features: [
      {
        category: "Специфікація V8",
        items: [
          "Компресорний 5.0L V8 525 к.с.",
          "Заводська матова плівка Carpathian Satin",
          "22-дюймові диски Style 5098 у кольорі Gloss Black",
          "Електронний активний задній диференціал з векторизацією тяги",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-panamera-gts-2021",

    brand_id: "brand_porsche",

    model_id: "model_porsche_panamera",
    brand: "Porsche",
    model: "Panamera",
    year: 2021,
    price: 115000,
    mileage: 41000,
    fuelType: "petrol",
    engine: "4.0L V8 Twin-Turbo",
    powerHp: 480,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Carmine Red",
    colorInterior: "Black GTS Leather / Alcantara with Carmine Red Package",
    vin: "WP0AB2A77MSA89104",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-09-02T10:15:00Z",
    location: "В дорозі з Франкфурта",
    description:
      "Емоційний Porsche Panamera GTS у фірмовому кольорі Carmine Red. Спортивна вихлопна система GTS, адаптивна 3-камерна пневмопідвіска, пакет Sport Chrono, аудіосистема BOSE.",
    features: [
      {
        category: "GTS Package",
        items: [
          "Пакет Sport Chrono з перемикачем режимів на кермі",
          "Спортивна вихлопна система з чорними патрубками",
          "21-дюймові диски Panamera Exclusive Design у чорному кольорі",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-911-turbo-s-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_911",
    brand: "Porsche",
    model: "911",
    trim: "Turbo S",
    year: 2023,
    price: 278000,
    mileage: 6200,
    fuelType: "petrol",
    engine: "3.8L Twin-Turbo Flat-6",
    powerHp: 650,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "GT Silver Metallic",
    colorInterior: "Black / Bordeaux Red Two-Tone Leather",
    vin: "WP0AD2A99PS192081",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-10-18T14:00:00Z",
    location: "Київ, шоурум REZAR",
    description:
      "Флагманський Porsche 911 Turbo S покоління 992. 650 к.с., розгін 0-100 км/год за 2.7 секунди. Керамічні гальма PCCB, спортивна вихлопна система, аудіосистема Burmester High-End 3D Surround.",
    features: [
      {
        category: "Оснащення Turbo S",
        items: [
          "Керамічні композитні гальма Porsche (PCCB) з жовтими супортами",
          "Система придушення кренів Porsche Dynamic Chassis Control (PDCC)",
          "Аудіосистема Burmester High-End 3D Surround Sound",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
    ],
  },
  {
    id: "porsche-911-carrera-4-gts-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_911",
    brand: "Porsche",
    model: "911",
    trim: "Carrera 4 GTS",
    year: 2023,
    price: 242000,
    mileage: 8900,
    fuelType: "petrol",
    engine: "3.0L Boxer-6 Twin-Turbo",
    powerHp: 480,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "Shark Blue",
    colorInterior: "GTS Interior Package with Shark Blue Stitching",
    vin: "WP0AA2A94PS190241",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-25T08:30:00Z",
    location: "В дорозі з Німеччини",
    description:
      "Ексклюзивний повнопривідний 911 Carrera 4 GTS у яскравому кольорі Shark Blue. Пакет полегшення ваги Lightweight Package, спортивні ковші, карбонові елементи кузова.",
    features: [
      {
        category: "GTS Специфікація",
        items: [
          "Фірмовий колір Shark Blue",
          "Пакет Sport Chrono з додатком Porsche Track Precision",
          "Підвіска PASM зі зниженням кліренсу на 10 мм",
        ],
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
    ],
  },

  // ==========================================
  // BATCH 2: 50 NEW EVENLY DISTRIBUTED VEHICLES
  // ==========================================
  {
    id: "porsche-cayenne-e-hybrid-coupe-2024",

    brand_id: "brand_porsche",

    model_id: "model_porsche_cayenne",
    brand: "Porsche",
    model: "Cayenne",
    trim: "E-Hybrid Coupe",
    year: 2024,
    price: 142000,
    mileage: 12000,
    fuelType: "plug_in_hybrid",
    engine: "3.0L V6 Turbo + Electric Motor",
    powerHp: 470,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Algarve Blue Metallic",
    colorInterior: "Black / Mojave Beige Smooth-Finish Leather",
    vin: "WP1AA2AY3RDA81923",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-30T10:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Оновлений Cayenne Coupe 2024 модельного року з батареєю 25.9 кВт·год. Запас ходу на електротязі до 90 км. Пневматична підвіска з 2-камерними амортизаторами, матричні світлодіодні фари, панорамний скляний дах.",
    features: [
      {
        category: "Оснащення E-Hybrid",
        items: ["Пневмопідвіска з системою PASM", "Пакет Sport Chrono", "21-дюймові диски RS Spyder Design", "Аудіосистема BOSE Surround Sound"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-718-cayman-gt4-rs-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_718_cayman",
    brand: "Porsche",
    model: "718 Cayman",
    trim: "GT4 RS Weissach Package",
    year: 2023,
    price: 239000,
    mileage: 3800,
    fuelType: "petrol",
    engine: "4.0L Naturally Aspirated Flat-6 (9000 rpm)",
    powerHp: 500,
    transmission: "robot",
    drive: "rear_wheel",
    bodyType: "coupe",
    colorExterior: "Arctic Grey",
    colorInterior: "Black Leather / Deep Sea Blue Race-Tex",
    vin: "WP0AC2A82PSA90182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-12T14:20:00Z",
    location: "Київ, шоурум REZAR",
    description: "Колекційний безкомпромісний спорткар Porsche 718 Cayman GT4 RS з пакетом Weissach. Карбоновий капот, карбонове антикрило на лебединих стійках, титановий каркас безпеки та ковані магнієві диски.",
    features: [
      {
        category: "Пакет Weissach",
        items: ["Пакет Weissach з відкритим карбоном", "Карбон-керамічна гальмівна система PCCB", "Ковані магнієві диски 20 дюймів", "Система підйому передньої осі"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-macan-electric-turbo-2024",

    brand_id: "brand_porsche",

    model_id: "model_porsche_macan",
    brand: "Porsche",
    model: "Macan",
    trim: "Turbo Electric",
    year: 2024,
    price: 124000,
    mileage: 1900,
    fuelType: "electric",
    engine: "Dual Permanent Magnet Motors (PPE 800V)",
    powerHp: 639,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Provence Lavender Metallic",
    colorInterior: "Black / Chalk Leather Interior",
    vin: "WP1AA2A58RDA99102",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-28T09:30:00Z",
    location: "В дорозі з Лейпцига",
    description: "Абсолютно новий повністю електричний Macan Turbo на 800-вольтовій платформі PPE. 639 к.с. у режимі Overboost, розгін 0-100 за 3.3 с. Зарядка 10-80% за 21 хвилину.",
    features: [
      {
        category: "Технології PPE",
        items: ["800-вольтова архітектура батареї 100 кВт·год", "Porsche Torque Vectoring Plus (PTV Plus)", "Керована задня вісь (Rear-axle steering)", "Проекційний дисплей з доповненою реальністю (AR HUD)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-panamera-4-e-hybrid-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_panamera",
    brand: "Porsche",
    model: "Panamera",
    trim: "4 E-Hybrid Executive",
    year: 2023,
    price: 118000,
    mileage: 18500,
    fuelType: "plug_in_hybrid",
    engine: "2.9L Twin-Turbo V6 + E-Machine",
    powerHp: 470,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Volcano Grey Metallic",
    colorInterior: "Marsala / Cream Two-Tone Exclusive Leather",
    vin: "WP0AA2A73PSA88192",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-20T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Подовжена версія Executive з додатковими 15 см простору для задніх пасажирів. Роздільні крісла позаду з масажем, столики з електроприводом, мультимедійна система для заднього ряду.",
    features: [
      {
        category: "Executive Luxury",
        items: ["Подовжена колісна база (+15 см)", "Індивідуальні комфортні сидіння позаду з вентиляцією та масажем", "Панорамний дах з двома секціями", "Пневматична підвіска з PASM"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-911-targa-4-gts-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_911",
    brand: "Porsche",
    model: "911",
    trim: "Targa 4 GTS",
    year: 2023,
    price: 228000,
    mileage: 7200,
    fuelType: "petrol",
    engine: "3.0L Boxer-6 Twin-Turbo",
    powerHp: 480,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "cabriolet",
    colorExterior: "Carmine Red",
    colorInterior: "GTS Package Black Race-Tex / Carmine Red",
    vin: "WP0BB2A91PSA99014",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-05T15:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Легендарна архітектура кузова Targa з характерною алюмінієвою дугою та скляним ковпаком. Повний привід, 480 к.с., спортивний вихлоп GTS, керамічні гальма PCCB.",
    features: [
      {
        category: "Targa Специфікація",
        items: ["Фірмовий дах Targa з автоматичним механізмом складання за 19 с", "Пакет Sport Chrono", "Спортивна підвіска PASM", "Аудіосистема BOSE"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-cayenne-s-2024",

    brand_id: "brand_porsche",

    model_id: "model_porsche_cayenne",
    brand: "Porsche",
    model: "Cayenne",
    trim: "S V8 Twin-Turbo",
    year: 2024,
    price: 136000,
    mileage: 9400,
    fuelType: "petrol",
    engine: "4.0L V8 Twin-Turbo",
    powerHp: 474,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Montego Blue Metallic",
    colorInterior: "Black / Crayon Two-Tone Leather",
    vin: "WP1AA2AY9RDA90184",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-26T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "У версії Cayenne S 2024 року повернувся справжній 4.0-літровий V8 Twin-Turbo! Потужний басовитий звук, спортивна вихлопна система, пневмопідвіска та салон Porsche Driver Experience.",
    features: [
      {
        category: "V8 Оснащення",
        items: ["4.0L V8 Twin-Turbo 474 к.с.", "HD Matrix LED фари", "Дисплей пасажира 10.9 дюйма", "21-дюймові диски Cayenne Exclusive Design"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-taycan-gts-sport-turismo-2023",

    brand_id: "brand_porsche",

    model_id: "model_porsche_taycan",
    brand: "Porsche",
    model: "Taycan",
    trim: "GTS Sport Turismo",
    year: 2023,
    price: 115000,
    mileage: 16000,
    fuelType: "electric",
    engine: "Dual Motors Performance Battery Plus (93.4 kWh)",
    powerHp: 598,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Neptune Blue",
    colorInterior: "GTS Interior Package Race-Tex Black",
    vin: "WP0AA2Y13PSA88102",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-15T10:00:00Z",
    location: "Передано власнику (Київ)",
    description: "Електричний спорт-універсал у рідкісному кольорі Neptune Blue. Батарея Performance Plus 93.4 кВт·год, пневмопідвіска GTS, скляний панорамний дах із технологією рідких кристалів Sunshine Control.",
    features: [
      {
        category: "GTS Sport Turismo",
        items: ["Скляний дах Sunshine Control з регулюванням прозорості", "Пакет SportDesign у чорному глянці", "Аудіосистема BOSE", "Запас ходу до 504 км"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "porsche-718-boxster-gts-2022",

    brand_id: "brand_porsche",

    model_id: "model_porsche_718_boxster",
    brand: "Porsche",
    model: "718 Boxster",
    trim: "GTS 4.0",
    year: 2022,
    price: 92000,
    mileage: 21000,
    fuelType: "petrol",
    engine: "4.0L Naturally Aspirated Boxer-6",
    powerHp: 400,
    transmission: "robot",
    drive: "rear_wheel",
    bodyType: "cabriolet",
    colorExterior: "Python Green",
    colorInterior: "Black Leather / Alcantara GTS Package",
    vin: "WP0CB2A84NSA90184",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-11T13:40:00Z",
    location: "Київ, шоурум REZAR",
    description: "Атмосферний середньомоторний кабріолет з мотором 4.0L на 400 к.с. Механічний диференціал з блокуванням, активні опори двигуна PADM, вихлопна система Sport Exhaust.",
    features: [
      {
        category: "Оснащення GTS 4.0",
        items: ["Атмосферний 4.0L Boxer 400 к.с.", "Спортивний вихлоп GTS з чорними патрубками", "20-дюймові диски 718 Sport у матовому чорному", "Пакет Sport Chrono"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // BMW (8 VEHICLES)
  // ==========================================
  {
    id: "bmw-m3-competition-touring-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m3",
    brand: "BMW",
    model: "M3",
    trim: "Competition M xDrive Touring",
    year: 2023,
    price: 112000,
    mileage: 14000,
    fuelType: "petrol",
    engine: "3.0L BMW M TwinPower Turbo S58",
    powerHp: 510,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Isle of Man Green Metallic",
    colorInterior: "Merino Kyalami Orange / Black Leather",
    vin: "WBA61AY00PFP89102",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-24T16:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Перший в історії серійний універсал BMW M3 Touring! Повний привід M xDrive з можливістю відключення передньої осі (2WD), карбонові ковші M Carbon, лазерна оптика, багажне відділення 500 л.",
    features: [
      {
        category: "Специфікація M3 Touring",
        items: ["Повний привід M xDrive з активним заднім диференціалом M", "Спортивні карбонові сидіння M Carbon", "BMW Live Cockpit Professional з вигнутим дисплеєм", "Ковані диски M Double-spoke 826 Bicolour"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-x7-m60i-xdrive-2024",

    brand_id: "brand_bmw",

    model_id: "model_bmw_x7",
    brand: "BMW",
    model: "X7",
    trim: "M60i xDrive",
    year: 2024,
    price: 138000,
    mileage: 8200,
    fuelType: "hybrid",
    engine: "4.4L M TwinPower Turbo V8 (S68) 48V",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Mineral White Metallic",
    colorInterior: "BMW Individual Tartufo Full Merino Leather",
    vin: "5UX23EM01R9P99201",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-27T10:15:00Z",
    location: "Київ, шоурум REZAR",
    description: "Флагманський 7-місний кросовер BMW X7 M60i з новим двигуном S68 від спортивного підрозділу M. Пневмопідвіска обох осей, повнокероване шасі, панорамний дах Sky Lounge, преміум-аудіо Bowers & Wilkins.",
    features: [
      {
        category: "Luxury Flagship",
        items: ["Аудіосистема Bowers & Wilkins Diamond Surround", "Підсвітка решітки радіатора Iconic Glow", "Пакет Executive Lounge з масажем сидінь", "22-дюймові M диски V-spoke 755M"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-m5-competition-f90-2022",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m5",
    brand: "BMW",
    model: "M5",
    trim: "Competition LCI",
    year: 2022,
    price: 99000,
    mileage: 32000,
    fuelType: "petrol",
    engine: "4.4L V8 Twin-Turbo (S63)",
    powerHp: 625,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Brands Hatch Grey Metallic",
    colorInterior: "Full Merino Black Leather with M Stripes",
    vin: "WBSJF0109NCB89201",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-14T11:20:00Z",
    location: "Київ, шоурум REZAR",
    description: "Культовий суперседан BMW M5 Competition рестайлінгової версії LCI. 625 к.с., розгін до 100 км/год за 3.3 с. Карбоновий дах, спортивний вихлоп M Sport, керамічні гальма M Carbon Ceramic.",
    features: [
      {
        category: "Competition Пакет",
        items: ["Карбон-керамічна гальмівна система M Carbon Ceramic", "Вихлопна система M Sport", "Ковані диски 20 дюймів M Y-spoke 789M", "Лазерні фари BMW Laserlight"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-x6-m-competition-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_x6",
    brand: "BMW",
    model: "X6",
    trim: "M Competition LCI",
    year: 2023,
    price: 149000,
    mileage: 11500,
    fuelType: "petrol",
    engine: "4.4L M TwinPower Turbo V8",
    powerHp: 625,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Marina Bay Blue Metallic",
    colorInterior: "BMW Individual Silverstone / Black Leather",
    vin: "5YM23EU09P9M99182",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-19T14:40:00Z",
    location: "Київ, шоурум REZAR",
    description: "Спортивний крос-купе BMW X6 M Competition останнього покоління з вигнутим дисплеєм BMW Curved Display. Пневмопідвіска з активними стабілізаторами Dynamic Drive, диференціал Active M.",
    features: [
      {
        category: "M Специфікація",
        items: ["Пакет M Driver з максимальною швидкістю 290 км/год", "Аудіосистема Bowers & Wilkins Diamond", "Панорамний дах Sky Lounge", "Спортивні сидіння M Multifunction з масажем"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-i7-m70-xdrive-2024",

    brand_id: "brand_bmw",

    model_id: "model_bmw_i7",
    brand: "BMW",
    model: "i7",
    trim: "M70 xDrive",
    year: 2024,
    price: 158000,
    mileage: 4500,
    fuelType: "electric",
    engine: "Dual Electric Motors M Performance (101.7 kWh)",
    powerHp: 660,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Two-Tone Black Sapphire / Oxide Grey",
    colorInterior: "BMW Individual Cashmere / Merino Leather",
    vin: "WBA73EH07RCA91024",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-29T13:00:00Z",
    location: "В дорозі з Дінгольфінга",
    description: "Найпотужніший серійний електроседан BMW. 660 к.с. та 1100 Нм тяги. 31.3-дюймовий екран BMW Theatre Screen для пасажирів другого ряду з роздільною здатністю 8K та підтримкою Amazon Fire TV.",
    features: [
      {
        category: "VIP Оснащення",
        items: ["31.3-дюймовий стельовий кінотеатр BMW Theatre Screen 8K", "Автоматичні двері Executive Lounge", "Двоколірне фірмове фарбування Two-Tone", "Аудіосистема Bowers & Wilkins 4D Diamond Sound"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-m2-coupe-g87-2023",

    brand_id: "brand_bmw",

    model_id: "model_bmw_m2",
    brand: "BMW",
    model: "M2",
    trim: "M Race Track Package",
    year: 2023,
    price: 79000,
    mileage: 6800,
    fuelType: "petrol",
    engine: "3.0L BMW M TwinPower Turbo S58",
    powerHp: 460,
    transmission: "automatic",
    drive: "rear_wheel",
    bodyType: "coupe",
    colorExterior: "Zandvoort Blue",
    colorInterior: "Merino Black Leather with M Highlight",
    vin: "3MW13DM00P8B89102",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-01T10:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Справжній драйверський спорткар компактного класу. Задній привід, диференціал Active M, карбоновий дах M Carbon, опціональні карбонові крісла M Carbon Bucket Seats.",
    features: [
      {
        category: "M Race Track",
        items: ["Карбоновий дах M Carbon", "Карбонові спортивні крісла M Carbon", "Пакет M Driver з розблокованою швидкістю 285 км/год", "Адаптивна M підвіска"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-x5-xdrive50e-2024",

    brand_id: "brand_bmw",

    model_id: "model_bmw_x5",
    brand: "BMW",
    model: "X5",
    trim: "xDrive50e M Sport Pro",
    year: 2024,
    price: 106000,
    mileage: 7100,
    fuelType: "plug_in_hybrid",
    engine: "3.0L Turbo Inline-6 + Electric Motor",
    powerHp: 489,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Dravit Grey Metallic",
    colorInterior: "Sensafin Coffee with Quilted Stitching",
    vin: "5UX43EU01R9P88123",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-22T17:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Оновлений гібридний X5 з батареєю збільшеної ємності 25.7 кВт·год (до 110 км на електротязі). Нова оптика з підсвіткою решітки Iconic Glow, пакет M Sport Pro, проекційний дисплей.",
    features: [
      {
        category: "M Sport Pro",
        items: ["Пакет M Sport Pro з гальмами M Sport червоного кольору", "Пневмопідвіска обох осей", "Світящася решітка Iconic Glow", "Аудіосистема Harman Kardon"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bmw-m850i-xdrive-gran-coupe-2022",

    brand_id: "brand_bmw",

    model_id: "model_bmw_8_series",
    brand: "BMW",
    model: "8 Series",
    trim: "M850i xDrive Gran Coupe",
    year: 2022,
    price: 89000,
    mileage: 38000,
    fuelType: "petrol",
    engine: "4.4L TwinPower Turbo V8",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Sonic Speed Blue Metallic",
    colorInterior: "BMW Individual Fiona Red / Black Leather",
    vin: "WBA73GV08NCA90184",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-25T14:00:00Z",
    location: "Передано клієнту (Львів)",
    description: "Розкішний 4-дверний Gran Coupe 8-ї серії з бітурбованим V8 на 530 к.с. Карбоновий дах, спортивний диференціал M, лазерні фари, кришталеві елементи управління CraftedClarity.",
    features: [
      {
        category: "M Performance Luxury",
        items: ["Кришталеві органи управління CraftedClarity", "Лазерна оптика BMW Laserlight", "Аудіосистема Bowers & Wilkins Diamond", "Повнокероване шасі Integral Active Steering"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // MERCEDES-BENZ (8 VEHICLES)
  // ==========================================
  {
    id: "mercedes-amg-gt-63-s-e-performance-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_amg_gt",
    brand: "Mercedes-Benz",
    model: "AMG GT",
    trim: "63 S E-Performance 4-Door",
    year: 2023,
    price: 178000,
    mileage: 9800,
    fuelType: "plug_in_hybrid",
    engine: "4.0L V8 Biturbo + Electric Motor (F1 Hybrid)",
    powerHp: 843,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "MANUFAKTUR Magno Graphite Grey",
    colorInterior: "Exclusive Nappa Black Leather with Yellow Stitching",
    vin: "W1K2906791A901842",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-25T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Найпотужніший серійний автомобіль AMG в історії: 843 к.с. та понад 1400 Нм крутного моменту з технологіями Formula 1. Розгін 0-100 за 2.9 секунди. Карбон-керамічні гальма, матовий кузов Magno.",
    features: [
      {
        category: "AMG E-Performance",
        items: ["Керамічні композитні гальма AMG з бронзовими супортами", "Аеродинамічний пакет AMG Aerodynamics з регульованим антикрилом", "Аудіосистема Burmester High-End 3D Surround", "Спортивні ковші AMG Performance"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-maybach-gls-600-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_maybach_gls",
    brand: "Mercedes-Benz",
    model: "Maybach GLS",
    trim: "600 4MATIC First Class",
    year: 2023,
    price: 215000,
    mileage: 12500,
    fuelType: "hybrid",
    engine: "4.0L V8 Biturbo with EQ Boost",
    powerHp: 557,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Two-Tone Rubellite Red / Obsidian Black",
    colorInterior: "MANUFAKTUR Crystal White / Silver Grey Pearl Nappa",
    vin: "4JG1679871A892014",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-08T15:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Вершина розкоші серед позашляховиків: 4-місна конфігурація First Class з роздільними отаманками, холодильником для шампанського та висувними столиками. Підвіска E-ACTIVE BODY CONTROL.",
    features: [
      {
        category: "First Class Luxury",
        items: ["Підвіска E-ACTIVE BODY CONTROL з режимом розгойдування", "Електричні підніжки з підсвіткою та логотипом Maybach", "Холодильний відсік для напоїв з посрібленими келихами Robbe & Berking", "Аудіосистема Burmester High-End 3D Surround Sound"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-s-580-4matic-long-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_s_class",
    brand: "Mercedes-Benz",
    model: "S-Class",
    trim: "S 580 4MATIC Long AMG Line",
    year: 2023,
    price: 139000,
    mileage: 16200,
    fuelType: "hybrid",
    engine: "4.0L V8 Biturbo EQ Boost",
    powerHp: 503,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "High-Tech Silver Metallic",
    colorInterior: "Exclusive Nappa Sienna Brown Leather",
    vin: "W1K2231761A990142",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-14T11:45:00Z",
    location: "Київ, шоурум REZAR",
    description: "Еталон бізнес-седанів: подовжена база Long, пакет задніх сидінь First Class, цифрова оптика Digital Light, керована задня вісь з кутом повороту до 10 градусів, аудіосистема Burmester 3D.",
    features: [
      {
        category: "S-Class VIP",
        items: ["Повнокероване шасі з кутом повороту задніх коліс 10 градусів", "Оптика DIGITAL LIGHT з проекцією символів на дорогу", "3D-дисплей водія та проекційний дисплей з доповненою реальністю", "Масаж сидінь з функцією гарячих каменів"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-amg-sl-63-performance-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_sl_class",
    brand: "Mercedes-Benz",
    model: "SL-Class",
    trim: "63 AMG 4MATIC+ Performance",
    year: 2023,
    price: 168000,
    mileage: 5400,
    fuelType: "petrol",
    engine: "4.0L V8 Biturbo Handcrafted AMG",
    powerHp: 585,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "cabriolet",
    colorExterior: "MANUFAKTUR Alpine Grey Solid",
    colorInterior: "Nappa Red Pepper / Black Leather",
    vin: "W1K2324811A890124",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-21T15:20:00Z",
    location: "Київ, шоурум REZAR",
    description: "Відродження культового родстера SL, розробленого з нуля інженерами AMG в Аффальтербаху. Тканинний м'який дах (складається за 15 секунд на швидкості до 60 км/год), повний привід 4MATIC+, 585 к.с.",
    features: [
      {
        category: "SL Performance",
        items: ["Пакет AMG DYNAMIC PLUS з блокуванням заднього диференціала", "Гідравлічна система стабілізації AMG ACTIVE RIDE CONTROL", "Екран мультимедіа з регульованим кутом нахилу для запобігання відблискам", "Система шарф-обігріву шиї AIRSCARF"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-g-400-d-stronger-than-time-2022",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_g_class",
    brand: "Mercedes-Benz",
    model: "G-Class",
    trim: "G 400 d Stronger Than Time",
    year: 2022,
    price: 152000,
    mileage: 34000,
    fuelType: "diesel",
    engine: "3.0L Inline-6 Turbo Diesel (OM656)",
    powerHp: 330,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "G manufaktur Olive Metallic",
    colorInterior: "G manufaktur Saddle Brown Nappa Leather",
    vin: "W1N4633501X991820",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-05T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Найнадійніший дизельний Гелендваген G 400 d у рідкісному ювілейному виконанні Stronger Than Time. 3 блокування диференціалів, пакети Night та Stainless Steel, преміум-саунд Burmester.",
    features: [
      {
        category: "G-Class Эксклюзив",
        items: ["Ювілейний пакет Stronger Than Time", "Аудіосистема Burmester Surround Sound", "Пакет G manufaktur з ромбоподібною прострочкою сидінь", "Фари MULTIBEAM LED"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-gle-63-s-amg-coupe-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_gle_coupe",
    brand: "Mercedes-Benz",
    model: "GLE Coupe",
    trim: "63 S AMG 4MATIC+ LCI",
    year: 2023,
    price: 144000,
    mileage: 14800,
    fuelType: "hybrid",
    engine: "4.0L V8 Biturbo Handcrafted AMG + EQ Boost",
    powerHp: 612,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Obsidian Black Metallic",
    colorInterior: "Exclusive Nappa Black / Truffle Brown Leather",
    vin: "4JG1673891A990142",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-18T16:20:00Z",
    location: "Київ, шоурум REZAR",
    description: "Купе-кросовер з 612-сильним бітурбованим V8. Пакет AMG Night, 22-дюймові ковані диски AMG у матовому чорному, спортивна пневмопідвіска AMG RIDE CONTROL+ з активним придушенням кренів.",
    features: [
      {
        category: "AMG 63 S Специфікація",
        items: ["Спортивна вихлопна система AMG Performance", "Пневмопідвіска AMG RIDE CONTROL+", "Панорамний дах", "Камери кругового огляду 360 з функцією прозорого капота"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-amg-eqe-53-4matic-2023",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_eqe",
    brand: "Mercedes-Benz",
    model: "EQE",
    trim: "53 AMG 4MATIC+ Dynamic Plus",
    year: 2023,
    price: 96000,
    mileage: 15400,
    fuelType: "electric",
    engine: "Dual Electric Motors AMG Performance",
    powerHp: 626,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Selenite Grey Metallic",
    colorInterior: "Artico / Microcut Microfiber with Red Stitching",
    vin: "W1K2951531A882014",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-09-03T11:00:00Z",
    location: "В дорозі зі Штутгарта",
    description: "Спортивний електричний бізнес-седан від підрозділу AMG. 626 к.с. (до 686 к.с. у режимі Race Start), розгін 0-100 за 3.5 с. Повнокероване шасі, пневмопідвіска AMG RIDE CONTROL+.",
    features: [
      {
        category: "AMG Electric",
        items: ["Пакет AMG DYNAMIC PLUS", "Повнокероване шасі з поворотом задніх коліс", "Звуковий генератор AMG SOUND EXPERIENCE", "Аудіосистема Burmester 3D Surround"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "mercedes-c-63-s-e-performance-2024",

    brand_id: "brand_mercedes_benz",

    model_id: "model_mercedes_c_class",
    brand: "Mercedes-Benz",
    model: "C-Class",
    trim: "AMG C 63 S E-Performance",
    year: 2024,
    price: 105000,
    mileage: 3200,
    fuelType: "plug_in_hybrid",
    engine: "2.0L Turbo (M139l with Electric Turbo) + Electric Motor",
    powerHp: 680,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "MANUFAKTUR Opalite White Bright",
    colorInterior: "Nappa Black Leather with Grey Accents",
    vin: "W1K2060871A991204",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-29T14:10:00Z",
    location: "Київ, шоурум REZAR",
    description: "Гібридний монстр нового покоління: 680 к.с. та 1020 Нм крутного моменту! Турбокомпресор з електроприводом від Formula 1. Повнокероване шасі в базовій комплектації, режим Drift Mode.",
    features: [
      {
        category: "Formula 1 Tech",
        items: ["Електричний турбокомпресор F1", "Керована задня вісь", "Режим Drift Mode", "Спортивні крісла AMG Performance другого покоління"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // AUDI (8 VEHICLES)
  // ==========================================
  {
    id: "audi-rs6-avant-gt-2024",

    brand_id: "brand_audi",

    model_id: "model_audi_rs6",
    brand: "Audi",
    model: "RS6",
    trim: "Avant GT Limited Edition 1 of 660",
    year: 2024,
    price: 249000,
    mileage: 1200,
    fuelType: "petrol",
    engine: "4.0L V8 TFSI Twin-Turbo",
    powerHp: 630,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Arkona White with Heritage Audi Sport Decals",
    colorInterior: "RS GT Black Leather / Dinamica with Red Accents",
    vin: "WAUZZZF26RA099182",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-30T15:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Лімітована спецверсія Audi RS6 Avant GT (лише 660 екземплярів у світі). Карбоновий капот, карбонові крила, регульована гвинтова підвіска Coilover, тиражна табличка в салоні.",
    features: [
      {
        category: "Limited Edition GT",
        items: ["Номерний тираж 1 із 660 екземплярів", "Повністю карбоновий капот та передні крила", "Регульовані гвинтові амортизатори Coilover", "Карбон-керамічна гальмівна система RS"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-r8-v10-performance-quattro-2022",

    brand_id: "brand_audi",

    model_id: "model_audi_r8",
    brand: "Audi",
    model: "R8",
    trim: "V10 Performance quattro",
    year: 2022,
    price: 185000,
    mileage: 11200,
    fuelType: "petrol",
    engine: "5.2L Naturally Aspirated V10 (8700 rpm)",
    powerHp: 620,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "Kemora Grey Metallic",
    colorInterior: "Fine Nappa Black Leather with Diamond Quilting",
    vin: "WAUZZZ4S6NA019284",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-25T13:10:00Z",
    location: "Київ, шоурум REZAR",
    description: "Прощальна версія суперкара з атмосферним двигуном 5.2L V10 потужністю 620 к.с. Карбонові накладки Sideblades, карбон-керамічні гальма, спортивна вихлопна система, аудіосистема Bang & Olufsen.",
    features: [
      {
        category: "R8 Performance",
        items: ["Атмосферний 5.2L V10 620 к.с.", "Керамічні гальма Audi Ceramic", "Карбонові накладки кузова Sideblades", "Лазерні фари Audi Laserlight"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-rs-q8-performance-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_rs_q8",
    brand: "Audi",
    model: "RS Q8",
    trim: "Carbon Black Edition",
    year: 2023,
    price: 148000,
    mileage: 16500,
    fuelType: "hybrid",
    engine: "4.0L V8 TFSI Twin-Turbo Mild Hybrid",
    powerHp: 600,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Mythos Black Metallic",
    colorInterior: "Valcona Black Leather with Express Red Stitching",
    vin: "WAUZZZF14PD089102",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-09T10:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Топовий купе-кросовер Audi Sport. 600 к.с. та 800 Нм, розгін до сотні за 3.8 с. Активні електромеханічні стабілізатори (EAWS), повнокероване шасі, 23-дюймові диски Audi Sport.",
    features: [
      {
        category: "RS Оснащення",
        items: ["Активна система придушення кренів EAWS", "Повнокероване шасі", "23-дюймові легкосплавні диски роторного дизайну", "Аудіосистема Bang & Olufsen Premium 3D Sound"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-rs-e-tron-gt-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_e_tron_gt",
    brand: "Audi",
    model: "e-tron GT",
    trim: "RS e-tron GT Carbon",
    year: 2023,
    price: 112000,
    mileage: 18200,
    fuelType: "electric",
    engine: "Dual Electric Motors (800V)",
    powerHp: 646,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Daytona Grey Pearl Effect",
    colorInterior: "Fine Nappa Black Leather with Honeycomb Pattern",
    vin: "WAUZZZFW9PA091028",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-30T16:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Гран-туризмо на 800-вольтовій електроплатформі. 646 к.с. у режимі Boost, розгін 0-100 за 3.3 с. Карбоновий дах, керамічні гальма, матричні лазерні фари, адаптивна 3-камерна пневмопідвіска.",
    features: [
      {
        category: "RS e-tron Оснащення",
        items: ["Карбоновий дах та дзеркала", "Керамічні гальма з антрацитовими супортами", "Лазерна оптика Audi Laser Light", "Аудіосистема Bang & Olufsen 3D Premium"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-rs4-avant-competition-plus-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_rs4",
    brand: "Audi",
    model: "RS4",
    trim: "Avant Competition Plus",
    year: 2023,
    price: 98000,
    mileage: 15000,
    fuelType: "petrol",
    engine: "2.9L V6 TFSI Twin-Turbo",
    powerHp: 450,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "wagon",
    colorExterior: "Sebring Black Crystal Effect",
    colorInterior: "Fine Nappa Black Leather / Dinamica RS Package",
    vin: "WAUZZZF43PA098124",
    status: "in_transit",
    isNewArrival: false,
    createdAt: "2024-09-02T12:00:00Z",
    location: "В дорозі з Інгольштадта",
    description: "Спецверсія Competition Plus з полегшеною шумоізоляцією, гвинтовою спортивною підвіскою RS Sport suspension Pro та спортивним диференціалом quattro з новими налаштуваннями.",
    features: [
      {
        category: "Competition Plus",
        items: ["Спортивна гвинтова підвіска RS Sport suspension Pro", "Спортивна вихлопна система RS plus", "Ковані диски Phantom Black 20 дюймів", "Максимальна швидкість збільшена до 290 км/год"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-s8-v8-tfsi-quattro-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_s8",
    brand: "Audi",
    model: "S8",
    trim: "4.0 TFSI quattro Vorsprung",
    year: 2023,
    price: 128000,
    mileage: 19400,
    fuelType: "hybrid",
    engine: "4.0L V8 TFSI Biturbo Mild Hybrid",
    powerHp: 571,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Floret Silver Metallic",
    colorInterior: "Valcona Black / Cognac Brown Leather",
    vin: "WAUZZZF88PD019284",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-19T14:15:00Z",
    location: "Київ, шоурум REZAR",
    description: "Флагманський спортивний седан представницького класу. Прогнозна активна підвіска Predictive Active Suspension (сканує дорогу камерою), повнокероване шасі, карбон-керамічні гальма.",
    features: [
      {
        category: "S8 High Tech",
        items: ["Прогнозна активна підвіска Predictive Active Suspension", "Повнокероване шасі з поворотом задньої осі", "Цифрові матричні фари Digital Matrix LED", "Аудіосистема Bang & Olufsen 3D Advanced з висувними твітерами"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-rs5-sportback-2023",

    brand_id: "brand_audi",

    model_id: "model_audi_rs5",
    brand: "Audi",
    model: "RS5",
    trim: "Sportback Carbon Black",
    year: 2023,
    price: 91000,
    mileage: 22000,
    fuelType: "petrol",
    engine: "2.9L V6 TFSI Twin-Turbo",
    powerHp: 450,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "liftback",
    colorExterior: "Sonoma Green Metallic",
    colorInterior: "Fine Nappa Black Leather with Crescendo Red Stitching",
    vin: "WAUZZZF50PA089104",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-29T10:40:00Z",
    location: "Передано клієнту (Одеса)",
    description: "Спортивний 5-дверний ліфтбек у рідкісному смарагдовому кольорі Sonoma Green. Пакет зовнішнього карбону, аудіосистема Bang & Olufsen, панорамний дах, спортивний диференціал quattro.",
    features: [
      {
        category: "Carbon Black",
        items: ["Пакет зовнішнього карбону", "Спортивний задній диференціал quattro", "Матричні фари Audi Matrix LED", "Панорамний скляний люк"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "audi-sq7-40-tfsi-quattro-2024",

    brand_id: "brand_audi",

    model_id: "model_audi_sq7",
    brand: "Audi",
    model: "SQ7",
    trim: "4.0 TFSI quattro Black Edition",
    year: 2024,
    price: 119000,
    mileage: 6500,
    fuelType: "petrol",
    engine: "4.0L V8 TFSI Twin-Turbo",
    powerHp: 507,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Glacier White Metallic",
    colorInterior: "Valcona Black Leather with Diamond Stitching",
    vin: "WAUZZZ4M8RD081923",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-25T17:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Оновлений потужний 7-місний кросовер SQ7 з мотором V8 на 507 к.с. Лазерні фари HD Matrix LED, електромеханічна стабілізація кренів, 22-дюймові диски Audi Sport, адаптивний круїз-контроль.",
    features: [
      {
        category: "SQ7 Black Edition",
        items: ["4.0L V8 TFSI 507 к.с.", "7-місна конфігурація салону", "Пакет Black Styling plus", "Аудіосистема Bang & Olufsen 3D Premium"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // LAND ROVER (7 VEHICLES)
  // ==========================================
  {
    id: "range-rover-sv-p530-lwb-2024",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover",
    brand: "Land Rover",
    model: "Range Rover",
    trim: "SV P530 Long Wheelbase 4-Seats",
    year: 2024,
    price: 259000,
    mileage: 4800,
    fuelType: "petrol",
    engine: "4.4L Twin-Turbo V8",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "SV Bespoke British Racing Green Gloss",
    colorInterior: "SV Serenity Perlino / Caraway Near-Aniline Leather",
    vin: "SALWP2V49RA192081",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-28T16:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Апогей розкоші британського бренду: виконання SV від підрозділу Special Vehicle Operations. Роздільні крісла заднього ряду SV Signature Suite з розкладним моторизованим столиком, керамічні органи управління.",
    features: [
      {
        category: "SV Bespoke Оснащення",
        items: ["SV Signature Suite з консоллю Club Table", "Керамічні перемикачі передач та шайби регулювання", "Холодильник SV з келихами Dartington Crystal", "Аудіосистема Meridian Signature 1600 Вт з динаміками в підголівниках"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "range-rover-sport-sv-edition-one-2024",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover_sport",
    brand: "Land Rover",
    model: "Range Rover Sport",
    trim: "SV Edition ONE",
    year: 2024,
    price: 218000,
    mileage: 3900,
    fuelType: "hybrid",
    engine: "4.4L Twin-Turbo V8 MHEV",
    powerHp: 635,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Carbon Bronze Matte",
    colorInterior: "Ultrafabrics Cinder Grey / Ebony",
    vin: "SALWR2V58RA091823",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-24T18:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Найшвидший і найдинамічніший Range Rover в історії: 635 к.с. Перші у світі 23-дюймові надлегкі карбонові диски (економія 35.6 кг) та карбон-керамічні гальма Brembo Octyma з 8-поршневими супортами.",
    features: [
      {
        category: "SV Edition ONE",
        items: ["23-дюймові надлегкі монолітні карбонові диски", "Карбон-керамічна гальмівна система Brembo Octyma", "Підвіска 6D Dynamics з гідравлічним зв'язком", "Віброакустичні передні сидіння Body and Soul Seat (BASS)"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "range-rover-autobiography-d350-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover",
    brand: "Land Rover",
    model: "Range Rover",
    trim: "Autobiography D350",
    year: 2023,
    price: 172000,
    mileage: 19000,
    fuelType: "diesel",
    engine: "3.0L Ingenium Inline-6 Twin-Turbo Diesel",
    powerHp: 350,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Santorini Black Metallic",
    colorInterior: "Perlino Semi-Aniline Leather",
    vin: "SALWP2V44PA182019",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-08T14:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Ідеальний екземпляр з перевіреним економічним дизелем D350. Пакет Autobiography: шкіра Semi-Aniline, активне шумозаглушення в підголівниках, панорамний дах, камери 3D Surround.",
    features: [
      {
        category: "Autobiography Оснащення",
        items: ["Шкіра Semi-Aniline по всьому салону", "Аудіосистема Meridian 3D Surround з активним шумопоглинанням", "Повнокероване шасі", "Електропривод дверей з дотяжками"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "defender-130-v8-outbound-2024",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_defender",
    brand: "Land Rover",
    model: "Defender",
    trim: "130 V8 500hp",
    year: 2024,
    price: 139000,
    mileage: 7400,
    fuelType: "petrol",
    engine: "5.0L Supercharged V8",
    powerHp: 500,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Sedona Red Metallic",
    colorInterior: "Ebony Windsor Leather / Robustec",
    vin: "SALWR2V57RA901824",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-23T11:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Повнорозмірний 8-місний позашляховик Defender 130 з потужним компресорним 5.0L V8 мотором на 500 к.с. Спортивний 4-трубний вихлоп, чорний контрастний дах, пневмопідвіска Electronic Air Suspension.",
    features: [
      {
        category: "Defender 130 V8",
        items: ["Компресорний 5.0L V8 500 к.с.", "8-місна компоновка салону", "Пневмопідвіска з адаптацією під тип ґрунту Terrain Response 2", "22-дюймові диски Gloss Black"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "range-rover-sport-autobiography-p510e-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover_sport",
    brand: "Land Rover",
    model: "Range Rover Sport",
    trim: "Autobiography P510e Plug-in Hybrid",
    year: 2023,
    price: 135000,
    mileage: 16800,
    fuelType: "plug_in_hybrid",
    engine: "3.0L Turbo Inline-6 + Electric Motor",
    powerHp: 510,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Giola Green Metallic",
    colorInterior: "Caraway / Ebony Semi-Aniline Leather",
    vin: "SALWR2V42PA881920",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-04T13:40:00Z",
    location: "Київ, шоурум REZAR",
    description: "Гібридний Range Rover Sport Autobiography P510e з батареєю 38.2 кВт·год (до 113 км на електриці). Динамічна пневмопідвіска Dynamic Air Suspension, цифрові світлодіодні фари, проекційний дисплей.",
    features: [
      {
        category: "P510e Autobiography",
        items: ["Батарея 38.2 кВт·год з підтримкою швидкої зарядки 50 кВт", "Повнокероване шасі", "Аудіосистема Meridian 3D Surround Sound", "Вентиляція та масаж передніх сидінь"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "range-rover-velar-autobiography-2024",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_range_rover_velar",
    brand: "Land Rover",
    model: "Range Rover Velar",
    trim: "Autobiography P400",
    year: 2024,
    price: 89000,
    mileage: 8500,
    fuelType: "hybrid",
    engine: "3.0L Inline-6 Turbo MHEV",
    powerHp: 400,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Arroios Grey Metallic",
    colorInterior: "Windsor Deep Garnet / Ebony Leather",
    vin: "SALYA2V61RA089104",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-21T10:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Оновлений Velar з новим центральним сенсорним екраном Pivi Pro 11.4 дюйма. Бездоганний мінімалістичний дизайн, пневмопідвіска, матричні піксельні світлодіодні фари Pixel LED.",
    features: [
      {
        category: "Velar Luxury",
        items: ["Піксельні світлодіодні фари Pixel LED", "Аудіосистема Meridian 3D Surround", "22-дюймові диски Style 1075 Gloss Dark Grey", "Пневматична підвіска з електронним керуванням"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "defender-90-v8-carpathian-2023",

    brand_id: "brand_land_rover",

    model_id: "model_land_rover_defender",
    brand: "Land Rover",
    model: "Defender",
    trim: "90 V8 Carpathian Edition",
    year: 2023,
    price: 126000,
    mileage: 12000,
    fuelType: "petrol",
    engine: "5.0L Supercharged V8",
    powerHp: 525,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Carpathian Grey Satin Protective Film",
    colorInterior: "Ebony Windsor Leather with Dinamica Suedecloth",
    vin: "SALWR2V40PA192014",
    status: "sold",
    isNewArrival: false,
    createdAt: "2024-07-20T15:30:00Z",
    location: "Передано клієнту (Харків)",
    description: "Короткобазний 3-дверний Defender 90 з мотором V8 на 525 к.с. Феноменальна геометрична прохідність та розгін до 100 км/год за 5.2 секунди. Заводська матова плівка Carpathian Satin.",
    features: [
      {
        category: "Defender 90 V8",
        items: ["5.0L Supercharged V8 525 к.с.", "Коротка колісна база з кутом рампи 31 градус", "Матове захисне покриття кузова Satin Film", "Спортивний вихлоп V8 з 4 патрубками"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // LEXUS (5 VEHICLES)
  // ==========================================
  {
    id: "lexus-lx-600-vip-4-seats-2023",

    brand_id: "brand_lexus",

    model_id: "model_lexus_lx",
    brand: "Lexus",
    model: "LX",
    trim: "600 VIP 4-Seats Executive",
    year: 2023,
    price: 155000,
    mileage: 14000,
    fuelType: "petrol",
    engine: "3.5L Twin-Turbo V6 (V35A-FTS)",
    powerHp: 415,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Sonic Titanium Metallic",
    colorInterior: "Semi-Aniline Sunflare Orange Luxury Leather",
    vin: "JTJBM7FX1P4019283",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-11T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Флагманський позашляховик у рідкісному 4-місному виконанні VIP: праве заднє сидіння розкладається в положення отаманки з кутом нахилу до 48 градусів. Гідропневматична підвіска AHC, аудіосистема Mark Levinson.",
    features: [
      {
        category: "VIP 4-Seats",
        items: ["Індивідуальні крісла позаду з нахилом 48 градусів", "Гідропневматична підвіска з регулюванням висоти AHC", "Аудіосистема Mark Levinson Reference 3D Surround (25 динаміків)", "Дисплеї розважальної системи для задніх пасажирів 11.6 дюйма"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "lexus-lc-500-convertible-v8-2023",

    brand_id: "brand_lexus",

    model_id: "model_lexus_lc",
    brand: "Lexus",
    model: "LC",
    trim: "500 Convertible V8 Sport",
    year: 2023,
    price: 114000,
    mileage: 9200,
    fuelType: "petrol",
    engine: "5.0L Naturally Aspirated 2UR-GSE V8",
    powerHp: 477,
    transmission: "automatic",
    drive: "rear_wheel",
    bodyType: "cabriolet",
    colorExterior: "Terrane Khaki Metallic",
    colorInterior: "Ochre Semi-Aniline Leather with Sand Soft Top",
    vin: "JTHHP5BY0P5001924",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-20T14:15:00Z",
    location: "Київ, шоурум REZAR",
    description: "Неймовірно красивий кабріолет з атмосферним 5.0L V8 двигуном. 4-шаровий звукопоглинаючий тканинний дах (складається за 15 секунд на швидкості до 50 км/год). Аудіосистема Mark Levinson, вентиляція шиї Neck Heater.",
    features: [
      {
        category: "LC 500 V8",
        items: ["Атмосферний 5.0L V8 477 к.с.", "Аудіосистема Mark Levinson Reference Surround", "Система клімат-консьєрж з автоматичним обігрівом шиї", "21-дюймові ковані поліровані диски"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "lexus-rx-500h-f-sport-performance-2024",

    brand_id: "brand_lexus",

    model_id: "model_lexus_rx",
    brand: "Lexus",
    model: "RX",
    trim: "500h F SPORT Performance AWD",
    year: 2024,
    price: 86000,
    mileage: 6100,
    fuelType: "hybrid",
    engine: "2.4L Turbo + DIRECT4 Electric Hybrid",
    powerHp: 371,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Sonic Copper Metallic",
    colorInterior: "F SPORT Dark Rose Leather / Ultrasuede",
    vin: "2T2BCMAJ2RC081923",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-27T12:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Топова модифікація кросовера RX з системою повного приводу нового покоління DIRECT4 та підрулюванням задніх коліс Dynamic Rear Steering. Ефектний колір Sonic Copper, матрична оптика BladeScan.",
    features: [
      {
        category: "F SPORT Performance",
        items: ["Система повного приводу DIRECT4", "Керована задня вісь Dynamic Rear Steering (DRS)", "Матричні фари BladeScan AHS", "Аудіосистема Mark Levinson 21 динамік"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "lexus-ls-500-awd-executive-2023",

    brand_id: "brand_lexus",

    model_id: "model_lexus_ls",
    brand: "Lexus",
    model: "LS",
    trim: "500 AWD Executive Kiriko Glass",
    year: 2023,
    price: 102000,
    mileage: 17500,
    fuelType: "petrol",
    engine: "3.5L Twin-Turbo V6",
    powerHp: 421,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Manganese Luster Metallic",
    colorInterior: "Black Semi-Aniline Leather with Kiriko Cut Glass",
    vin: "JTHFF1FL6P5019284",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-08-18T10:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Японський шедевр ремісничого мистецтва Такумі: дверні карти декоровані традиційним гравірованим склом Kiriko та складеною вручну тканиною орігамі. Пневмопідвіска, масаж задніх сидінь.",
    features: [
      {
        category: "Takumi Craftsmanship",
        items: ["Вставки з японського гранованого кришталю Kiriko Glass", "Оздоблення дверей тканиною за технікою орігамі", "Крісло Ottoman позаду з нахилом та підставкою для ніг", "Аудіосистема Mark Levinson QLI Reference Surround 23 динаміки"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "lexus-gx-550-overtrail-2024",

    brand_id: "brand_lexus",

    model_id: "model_lexus_gx",
    brand: "Lexus",
    model: "GX",
    trim: "550 Overtrail+ Luxury",
    year: 2024,
    price: 118000,
    mileage: 3400,
    fuelType: "petrol",
    engine: "3.4L Twin-Turbo V6",
    powerHp: 354,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Earth and Black Onyx Two-Tone",
    colorInterior: "Chateau NuLuxe with Olive Ultrasuede Accents",
    vin: "JTJBA7FX3R4091823",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-28T14:00:00Z",
    location: "В дорозі з Японії",
    description: "Брутальний рамний позашляховик Lexus GX нового покоління у позашляховому виконанні Overtrail+. 33-дюймові позашляхові шини All-Terrain, електронна система відключення стабілізаторів E-KDSS, блокування заднього диференціала.",
    features: [
      {
        category: "Overtrail+ Extreme",
        items: ["Електронна система кінетичної стабілізації підвіски E-KDSS", "Електронне блокування заднього диференціала", "33-дюймові всюдихідні шини Toyo Open Country A/T", "Система камери кругового огляду Multi-Terrain Monitor"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // BENTLEY (3 VEHICLES)
  // ==========================================
  {
    id: "bentley-continental-gt-speed-w12-2023",

    brand_id: "brand_bentley",

    model_id: "model_bentley_continental_gt",
    brand: "Bentley",
    model: "Continental GT",
    trim: "Speed 6.0 W12 Mulliner",
    year: 2023,
    price: 285000,
    mileage: 5800,
    fuelType: "petrol",
    engine: "6.0L Twin-Turbo W12 TSI",
    powerHp: 659,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "Anthracite Satin Matte",
    colorInterior: "Mulliner Hotspur Red / Beluga Diamond Quilted Leather",
    vin: "SCBDG2ZG9PC089123",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-26T17:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Прощальний шедевр з легендарним 12-циліндровим мотором W12 на 659 к.с. Карбон-керамічна гальмівна система з 440-мм дисками (найбільші у світі), повнокероване шасі, поворотний тристоронній дисплей Bentley Rotating Display.",
    features: [
      {
        category: "Mulliner Speed Spec",
        items: ["Тристоронній обертовий дисплей Bentley Rotating Display", "Карбон-керамічні гальма з 10-поршневими супортами", "Подвійна ромбоподібна прострочка шкіри Diamond-in-Diamond (712 стібків на ромб)", "Аудіосистема Naim for Bentley 2200 Вт з 18 динаміками"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bentley-bentayga-s-v8-2023",

    brand_id: "brand_bentley",

    model_id: "model_bentley_bentayga",
    brand: "Bentley",
    model: "Bentayga",
    trim: "S V8 Black Edition",
    year: 2023,
    price: 245000,
    mileage: 11000,
    fuelType: "petrol",
    engine: "4.0L Twin-Turbo V8",
    powerHp: 550,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Glacier White with Blackline Package",
    colorInterior: "Beluga / Mandarin Orange Contrast Leather",
    vin: "SCBZZ24V8PC019284",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-17T11:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Спортивна модифікація кросовера Bentayga S зі спортивним вихлопом та активною 48-вольтовою системою придушення кренів Bentley Dynamic Ride. Пакет Blackline з затемненою оптикою та 22-дюймовими дисками S.",
    features: [
      {
        category: "Bentayga S Spec",
        items: ["Система активної стабілізації Bentley Dynamic Ride", "Спортивний вихлоп зі спареними патрубками", "Пакет Blackline з чорним глянцевим декором", "Аудіосистема Naim for Bentley"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "bentley-flying-spur-azure-v8-2023",

    brand_id: "brand_bentley",

    model_id: "model_bentley_flying_spur",
    brand: "Bentley",
    model: "Flying Spur",
    trim: "Azure 4.0 V8 Mulliner",
    year: 2023,
    price: 238000,
    mileage: 12400,
    fuelType: "petrol",
    engine: "4.0L Twin-Turbo V8",
    powerHp: 550,
    transmission: "robot",
    drive: "all_wheel",
    bodyType: "sedan",
    colorExterior: "Havana Dark Brown Metallic",
    colorInterior: "Linen / Burnt Oak Two-Tone Hide with Open Pore Koa Wood",
    vin: "SCBCG2ZG5PC091024",
    status: "in_stock",
    isNewArrival: false,
    createdAt: "2024-09-02T15:20:00Z",
    location: "Київ, шоурум REZAR",
    description: "Седан найвищого класу в орієнтованому на максимальний комфорт виконанні Azure. Оздоблення шпоном рідкісного дерева Коа з відкритими порами, скляний панорамний дах, повнокероване шасі.",
    features: [
      {
        category: "Azure Wellness Spec",
        items: ["Пакет комфорту сидінь з функцією постурального масажу", "Повнокероване шасі Electronic All-Wheel Steering", "Висувна фігурка Flying B на капоті з підсвіткою крил", "Аудіосистема Bang & Olufsen for Bentley"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1600&q=85"
    ]
  },

  // ==========================================
  // MASERATI (3 VEHICLES)
  // ==========================================
  {
    id: "maserati-mc20-cielo-spyder-2023",

    brand_id: "brand_maserati",

    model_id: "model_maserati_mc20",
    brand: "Maserati",
    model: "MC20",
    trim: "Cielo Spyder Nettuno V6",
    year: 2023,
    price: 275000,
    mileage: 2400,
    fuelType: "petrol",
    engine: "3.0L Twin-Turbo 90° V6 Nettuno (F1 Pre-Chamber)",
    powerHp: 630,
    transmission: "robot",
    drive: "rear_wheel",
    bodyType: "cabriolet",
    colorExterior: "Acquamarina Fuoriserie",
    colorInterior: "Ice White Full Leather / Alcantara with Cyan Contrast",
    vin: "ZAM90XPA9P1019283",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-27T14:00:00Z",
    location: "Київ, шоурум REZAR",
    description: "Італійський середньомоторний спайдер з інноваційним двигуном Nettuno (технологія передкамерного запалювання з F1). Скляний дах з електрохромним склом PDLC (змінює прозорість за 1 секунду), карбоновий монокок.",
    features: [
      {
        category: "Cielo Специфікація",
        items: ["Скляний дах з електрохромним затемненням Smart Glass PDLC", "Карбоновий монокок Dallara", "Двері типу крила метелика (Butterfly doors)", "Аудіосистема Sonus faber High Premium 12 динаміків"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "maserati-grecale-trofeo-v6-2024",

    brand_id: "brand_maserati",

    model_id: "model_maserati_grecale",
    brand: "Maserati",
    model: "Grecale",
    trim: "Trofeo 3.0 V6 Nettuno",
    year: 2024,
    price: 109000,
    mileage: 4200,
    fuelType: "petrol",
    engine: "3.0L Twin-Turbo V6 Nettuno",
    powerHp: 530,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "suv",
    colorExterior: "Giallo Corse Yellow Metallic",
    colorInterior: "Black Chevron Full Grain Leather with Yellow Stitching",
    vin: "ZN682XTA3R7091823",
    status: "in_stock",
    isNewArrival: true,
    createdAt: "2024-10-25T13:30:00Z",
    location: "Київ, шоурум REZAR",
    description: "Спортивний італійський кросовер у топовій версії Trofeo з дефорсованим мотором Nettuno від суперкара MC20 (530 к.с., 0-100 за 3.8 с). Пневмопідвіска, самоблокований задній диференціал, звук Sonus faber.",
    features: [
      {
        category: "Trofeo Spec",
        items: ["3.0L V6 Nettuno 530 к.с.", "Пневмопідвіска з регулюванням кліренсу в 6 положеннях", "Аудіосистема Sonus faber 3D Premium 21 динамік 1285 Вт", "21-дюймові ковані диски Pegaso Crio"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=85"
    ]
  },
  {
    id: "maserati-granturismo-trofeo-2024",

    brand_id: "brand_maserati",

    model_id: "model_maserati_granturismo",
    brand: "Maserati",
    model: "GranTurismo",
    trim: "Trofeo V6 Nettuno AWD",
    year: 2024,
    price: 189000,
    mileage: 3100,
    fuelType: "petrol",
    engine: "3.0L Twin-Turbo V6 Nettuno",
    powerHp: 550,
    transmission: "automatic",
    drive: "all_wheel",
    bodyType: "coupe",
    colorExterior: "Grigio Cangiante Fuoriserie",
    colorInterior: "Corallo Red / Nero Full Premium Leather",
    vin: "ZAM34XTA1R1019284",
    status: "in_transit",
    isNewArrival: true,
    createdAt: "2024-10-29T10:00:00Z",
    location: "В дорозі з Модени",
    description: "Нове покоління культового купе GranTurismo. 550 к.с., повний привід AWD, розгін 0-100 за 3.5 с. Пневмопідвіска, цифровий салон Maserati Intelligent Assistant, преміальне звучання Sonus faber.",
    features: [
      {
        category: "GranTurismo Trofeo",
        items: ["550-сильний двигун V6 Nettuno", "Повний привід з електронним заднім диференціалом e-LSD", "Аудіосистема Sonus faber 3D Sound 19 динаміків", "Карбонові накладки бамперів та порогів Trofeo"]
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85"
    ]
  }

];
