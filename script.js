(() => {
  const selector = document.getElementById("language-select");
  if (!selector) return;

  const dictionaries = {
    en: {
      "Язык страницы":"Page language","Русский":"Russian","Регистрация":"Registration",
      "Указание игровых данных и проверка аккаунта.":"Submit your game details and verify your account.",
      "Правила дуэли":"Duel rules","Проведение матча, счёт, доказательства, жалобы и честная игра.":"Match procedure, scoring, evidence, reports and fair play.",
      "Общие правила":"General rules","Основные требования к участникам FACEIT и правила поведения вне дуэли.":"Core requirements for FACEIT players and conduct outside duels.",
      "РЕГИСТРАЦИЯ":"REGISTRATION","И ПРОФИЛЬ":"AND PROFILE",
      "Чтобы участвовать в дуэлях FACEIT, зарегистрируйся через Telegram-бота и подтверди свой игровой аккаунт.":"To take part in FACEIT duels, register through the Telegram bot and verify your game account.",
      "01. Начало регистрации":"01. Start registration",
      "Открой Telegram-бота FACEIT, нажми «Регистрация» и следуй инструкциям. Тебе потребуется указать игровой никнейм и Block Strike ID.":"Open the FACEIT Telegram bot, tap “Register” and follow the instructions. You will need your in-game nickname and Block Strike ID.",
      "02. Никнейм и Block Strike ID":"02. Nickname and Block Strike ID",
      "Никнейм и ID должны полностью совпадать с данными твоего текущего аккаунта в Block Strike. Проверь их перед отправкой.":"Your nickname and ID must exactly match your current Block Strike account. Check both before submitting.",
      "Если данные не совпадают, на тебя могут подать жалобу. При подтверждении нарушения администрация может применить наказание.":"Other players may report mismatched details. If a violation is confirmed, the administration may apply a penalty.",
      "Где найти и скопировать свой никнейм и Block Strike ID.":"Where to find and copy your nickname and Block Strike ID.",
      "03. Дождись заявки в друзья":"03. Wait for the friend request",
      "После отправки данных администратор проверит твой ID и отправит заявку в друзья в Block Strike. Дождись уведомления от Telegram-бота.":"After you submit your details, an administrator will check your ID and send you a friend request in Block Strike. Wait for the Telegram bot notification.",
      "04. Прими заявку":"04. Accept the request",
      "Открой Block Strike, найди входящую заявку от администратора FACEIT и прими её.":"Open Block Strike, find the incoming friend request from the FACEIT administrator, and accept it.",
      "Прими заявку администратора в списке входящих друзей.":"Accept the administrator’s request in your incoming friend requests.",
      "05. Отправь код проверки":"05. Send the verification code",
      "После того как администратор отметит отправку заявки в боте, в Telegram тебе придёт шестизначный код.":"Once the administrator marks the request as sent in the bot, you will receive a six-digit code on Telegram.",
      "Отправь этот код в личные сообщения администратору непосредственно в Block Strike.":"Send this code to the administrator in a private message inside Block Strike.",
      "ID АДМИНИСТРАТОРА":"ADMINISTRATOR ID",
      "Перед отправкой проверь, что открыл профиль именно с этим ID.":"Before sending the code, make sure the profile has this exact ID.",
      "Скопируй код из Telegram и отправь его администратору с ID 35144997 в личные сообщения Block Strike.":"Copy the code from Telegram and send it to administrator ID 35144997 in Block Strike private messages.",
      "06. Дождись подтверждения":"06. Wait for confirmation",
      "После проверки администратор подтвердит регистрацию. До подтверждения поиск дуэлей может быть недоступен.":"After verification, the administrator will approve your registration. Duel matchmaking may be unavailable until approval.",
      "ЕСЛИ ВОЗНИКЛА ПРОБЛЕМА":"IF SOMETHING GOES WRONG",
      "Если заявка не пришла, код не принимается или проверка затянулась, проверь правильность ID и обратись к администрации FACEIT.":"If the request never arrives, the code is rejected, or verification takes too long, check your ID and contact FACEIT staff.",
      "07. Профиль игрока":"07. Player profile","В профиле отображаются:":"Your profile displays:",
      "Никнейм и Block Strike ID.":"Nickname and Block Strike ID.","Текущий рейтинг Elo.":"Current Elo rating.",
      "Количество сыгранных матчей.":"Matches played.","История результатов.":"Match history.","Место в таблице лидеров.":"Leaderboard position.",
      "08. Изменение данных":"08. Updating your details",
      "Если ты изменил никнейм или игровой аккаунт, обнови данные в FACEIT. Изменение никнейма может быть ограничено периодом ожидания, а смена Block Strike ID может потребовать повторной проверки.":"If your nickname or game account changes, update your FACEIT details. Nickname changes may have a cooldown, and changing your Block Strike ID may require re-verification.",
      "ПРАВИЛА":"DUEL","ДУЭЛЕЙ":"RULES","Перед первой игрой обязательно ознакомься со всеми правилами.":"Read all rules before playing your first duel.",
      "01. Общие положения":"01. General provisions",
      "FACEIT — система рейтинговых дуэлей в Block Strike. Формат матча — 1 на 1. Каждый игрок обязан соблюдать правила честной игры.":"FACEIT is a ranked duel system for Block Strike. Matches are 1v1, and every player must follow the fair-play rules.",
      "02. Читы, модификации и сторонние программы":"02. Cheats, modifications and third-party software",
      "03. Честная игра и обход ограничений":"03. Fair play and circumvention",
      "04. Игра по всей карте":"04. Playing across the entire map",
      "Дуэль проводится по всей карте. Игроки могут свободно перемещаться по локации и атаковать соперника в любой её части, в том числе возле его спавна.":"Duels take place across the entire map. Players may move freely and attack anywhere, including near an opponent’s spawn.",
      "Зажим спавна разрешён.":"Spawn trapping is allowed.",
      "05. Отступление и защита":"05. Retreating and defending",
      "Отход от соперника, отступление для защиты и смена позиции разрешены, если они являются частью игрового процесса. Само по себе отступление не считается нарушением.":"Moving away, retreating to defend, and repositioning are allowed when they are part of normal gameplay. Retreating alone is not a violation.",
      "06. Намеренное затягивание дуэли":"06. Deliberately stalling a duel",
      "Намеренное затягивание дуэли строго запрещено.":"Deliberately stalling a duel is strictly prohibited.",
      "Нельзя просто убегать от соперника по всей карте, постоянно избегать боя и намеренно мешать завершению матча.":"You may not run around the map to avoid combat continuously and deliberately prevent the match from ending.",
      "07. Поиск соперника и синхронизация времени":"07. Matchmaking and time synchronisation",
      "Для поиска дуэли открой Telegram-бота, выбери регион Brazil или Russia и дождись автоматического подбора соперника. Карта случайно выбирается из списка Casta или 3000, а Host назначается системой.":"To find a duel, open the Telegram bot, choose Brazil or Russia, and wait for an opponent. The map is randomly selected from Casta or 3000, and the system assigns the host.",
      "После нахождения соперника оба игрока должны пройти синхронизацию времени. Укажи своё местное время в запрошенном формате. Бот определяет официальное время начала матча. Если синхронизация не завершена в установленный срок, матч отменяется без изменения рейтинга.":"Once an opponent is found, both players must synchronise their time. Enter your local time in the requested format. The bot sets the official match start time. If synchronisation is not completed in time, the match is cancelled without rating changes.",
      "08. Создание комнаты и начало матча":"08. Creating the room and starting the match",
      "Официальным считается время начала, установленное ботом. Host обязан создать комнату с указанными названием и паролем именно к этому времени. До официального начала создавать комнату нельзя.":"The official start time is the one set by the bot. The host must create the room using the assigned name and password at that time. Do not create the room early.",
      "Второй игрок должен подключиться к указанной комнате.":"The second player must join the specified room.",
      "09. Обычный сервер и стандартные настройки":"09. Standard server settings",
      "Использовать пользовательские настройки сервера строго запрещено.":"Custom server settings are strictly prohibited.",
      "Матч должен проходить на обычном сервере со стандартными настройками режима.":"Matches must use a regular server with the mode’s standard settings.",
      "10. Проведение дуэли":"10. Playing the duel",
      "После подключения обоих игроков начинается дуэль. Победа определяется достижением 30 очков. Максимальная продолжительность матча — 30 минут с официального времени начала.":"The duel begins once both players have joined. The winner is the first to reach 30 points. A match may last no longer than 30 minutes from the official start time.",
      "11. Неявка соперника":"11. Opponent no-show",
      "12. Host не создал комнату":"12. The host did not create the room",
      "13. Подтверждение результата":"13. Confirming the result",
      "14. Досрочный выход соперника":"14. Opponent leaves early",
      "15. Рейтинг Elo":"15. Elo rating","16. Жалобы":"16. Reports","17. Прочие нарушения и наказания":"17. Other violations and penalties",
      "18. Обязанности и изменение правил":"18. Responsibilities and rule changes",
      "19. Дополнительные правила поведения в дуэли":"19. Additional duel conduct rules",
      "ОБЩИЕ ПРАВИЛА":"GENERAL RULES","Look for duels right now":"Find a duel now",
      "Перейти в Telegram ↗":"Go to Telegram ↗","К регистрации ↑":"Back to registration ↑"
    },
    "pt-BR": {
      "Язык страницы":"Idioma da página","Русский":"Russo","Регистрация":"Cadastro",
      "Указание игровых данных и проверка аккаунта.":"Envie seus dados de jogo e verifique sua conta.",
      "Правила дуэли":"Regras do duelo","Проведение матча, счёт, доказательства, жалобы и честная игра.":"Partida, pontuação, provas, denúncias e jogo limpo.",
      "Общие правила":"Regras gerais","Основные требования к участникам FACEIT и правила поведения вне дуэли.":"Requisitos para participantes do FACEIT e conduta fora dos duelos.",
      "РЕГИСТРАЦИЯ":"CADASTRO","И ПРОФИЛЬ":"E PERFIL",
      "Чтобы участвовать в дуэлях FACEIT, зарегистрируйся через Telegram-бота и подтверди свой игровой аккаунт.":"Para participar dos duelos FACEIT, cadastre-se pelo bot do Telegram e verifique sua conta de jogo.",
      "01. Начало регистрации":"01. Iniciar cadastro",
      "Открой Telegram-бота FACEIT, нажми «Регистрация» и следуй инструкциям. Тебе потребуется указать игровой никнейм и Block Strike ID.":"Abra o bot do FACEIT no Telegram, toque em “Cadastro” e siga as instruções. Você precisará informar seu nick e ID do Block Strike.",
      "02. Никнейм и Block Strike ID":"02. Nick e ID do Block Strike",
      "Никнейм и ID должны полностью совпадать с данными твоего текущего аккаунта в Block Strike. Проверь их перед отправкой.":"Seu nick e ID devem corresponder exatamente aos dados da sua conta atual no Block Strike. Confira antes de enviar.",
      "Если данные не совпадают, на тебя могут подать жалобу. При подтверждении нарушения администрация может применить наказание.":"Outros jogadores podem denunciar dados divergentes. Se a infração for confirmada, a administração poderá aplicar uma penalidade.",
      "Где найти и скопировать свой никнейм и Block Strike ID.":"Onde encontrar e copiar seu nick e ID do Block Strike.",
      "03. Дождись заявки в друзья":"03. Aguarde o pedido de amizade",
      "После отправки данных администратор проверит твой ID и отправит заявку в друзья в Block Strike. Дождись уведомления от Telegram-бота.":"Depois de enviar seus dados, um administrador verificará seu ID e enviará um pedido de amizade no Block Strike. Aguarde a notificação do bot no Telegram.",
      "04. Прими заявку":"04. Aceite o pedido",
      "Открой Block Strike, найди входящую заявку от администратора FACEIT и прими её.":"Abra o Block Strike, encontre o pedido de amizade do administrador do FACEIT e aceite-o.",
      "Прими заявку администратора в списке входящих друзей.":"Aceite o pedido do administrador na lista de solicitações recebidas.",
      "05. Отправь код проверки":"05. Envie o código de verificação",
      "После того как администратор отметит отправку заявки в боте, в Telegram тебе придёт шестизначный код.":"Quando o administrador marcar o pedido como enviado no bot, você receberá um código de seis dígitos pelo Telegram.",
      "Отправь этот код в личные сообщения администратору непосредственно в Block Strike.":"Envie esse código por mensagem privada ao administrador dentro do Block Strike.",
      "ID АДМИНИСТРАТОРА":"ID DO ADMINISTRADOR",
      "Перед отправкой проверь, что открыл профиль именно с этим ID.":"Antes de enviar, confira se o perfil aberto tem exatamente esse ID.",
      "Скопируй код из Telegram и отправь его администратору с ID 35144997 в личные сообщения Block Strike.":"Copie o código do Telegram e envie por mensagem privada no Block Strike ao administrador com o ID 35144997.",
      "06. Дождись подтверждения":"06. Aguarde a confirmação",
      "После проверки администратор подтвердит регистрацию. До подтверждения поиск дуэлей может быть недоступен.":"Após a verificação, o administrador aprovará seu cadastro. A busca por duelos pode ficar indisponível até a aprovação.",
      "ЕСЛИ ВОЗНИКЛА ПРОБЛЕМА":"SE HOUVER UM PROBLEMA",
      "Если заявка не пришла, код не принимается или проверка затянулась, проверь правильность ID и обратись к администрации FACEIT.":"Se o pedido não chegar, o código for recusado ou a verificação demorar, confira seu ID e entre em contato com a equipe do FACEIT.",
      "07. Профиль игрока":"07. Perfil do jogador","В профиле отображаются:":"O perfil mostra:",
      "Никнейм и Block Strike ID.":"Nick e ID do Block Strike.","Текущий рейтинг Elo.":"Classificação Elo atual.",
      "Количество сыгранных матчей.":"Partidas disputadas.","История результатов.":"Histórico de resultados.","Место в таблице лидеров.":"Posição no ranking.",
      "08. Изменение данных":"08. Atualização dos dados",
      "Если ты изменил никнейм или игровой аккаунт, обнови данные в FACEIT. Изменение никнейма может быть ограничено периодом ожидания, а смена Block Strike ID может потребовать повторной проверки.":"Se você mudar de nick ou de conta no jogo, atualize seus dados no FACEIT. A troca de nick pode ter um período de espera, e mudar o ID do Block Strike pode exigir nova verificação.",
      "ПРАВИЛА":"REGRAS","ДУЭЛЕЙ":"DOS DUELOS","Перед первой игрой обязательно ознакомься со всеми правилами.":"Leia todas as regras antes de jogar seu primeiro duelo.",
      "01. Общие положения":"01. Disposições gerais",
      "FACEIT — система рейтинговых дуэлей в Block Strike. Формат матча — 1 на 1. Каждый игрок обязан соблюдать правила честной игры.":"FACEIT é um sistema de duelos ranqueados no Block Strike. As partidas são 1 contra 1, e todos devem seguir as regras de jogo limpo.",
      "02. Читы, модификации и сторонние программы":"02. Cheats, modificações e programas de terceiros",
      "03. Честная игра и обход ограничений":"03. Jogo limpo e tentativa de burlar restrições",
      "04. Игра по всей карте":"04. Jogo em todo o mapa",
      "Дуэль проводится по всей карте. Игроки могут свободно перемещаться по локации и атаковать соперника в любой её части, в том числе возле его спавна.":"O duelo acontece em todo o mapa. Os jogadores podem se movimentar livremente e atacar em qualquer área, inclusive perto do ponto de renascimento do adversário.",
      "Зажим спавна разрешён.":"Prender o adversário no spawn é permitido.",
      "05. Отступление и защита":"05. Recuo e defesa",
      "Отход от соперника, отступление для защиты и смена позиции разрешены, если они являются частью игрового процесса. Само по себе отступление не считается нарушением.":"Afastar-se do adversário, recuar para se defender e mudar de posição são ações permitidas quando fazem parte da estratégia. Recuar, por si só, não é infração.",
      "06. Намеренное затягивание дуэли":"06. Prolongar o duelo de propósito",
      "Намеренное затягивание дуэли строго запрещено.":"Prolongar um duelo de propósito é estritamente proibido.",
      "Нельзя просто убегать от соперника по всей карте, постоянно избегать боя и намеренно мешать завершению матча.":"Não é permitido fugir pelo mapa, evitar o combate continuamente e impedir de propósito que a partida termine.",
      "07. Поиск соперника и синхронизация времени":"07. Busca de adversário e sincronização de horário",
      "Для поиска дуэли открой Telegram-бота, выбери регион Brazil или Russia и дождись автоматического подбора соперника. Карта случайно выбирается из списка Casta или 3000, а Host назначается системой.":"Para encontrar um duelo, abra o bot do Telegram, escolha Brazil ou Russia e aguarde o pareamento. O mapa será escolhido aleatoriamente entre Casta e 3000, e o sistema definirá o host.",
      "После нахождения соперника оба игрока должны пройти синхронизацию времени. Укажи своё местное время в запрошенном формате. Бот определяет официальное время начала матча. Если синхронизация не завершена в установленный срок, матч отменяется без изменения рейтинга.":"Depois de encontrar um adversário, ambos devem sincronizar o horário. Informe a hora local no formato solicitado. O bot define o horário oficial de início. Se a sincronização não for concluída a tempo, a partida será cancelada sem alterar o rating.",
      "08. Создание комнаты и начало матча":"08. Criação da sala e início da partida",
      "Официальным считается время начала, установленное ботом. Host обязан создать комнату с указанными названием и паролем именно к этому времени. До официального начала создавать комнату нельзя.":"O horário oficial é o definido pelo bot. O host deve criar a sala com o nome e a senha fornecidos nesse horário. Não crie a sala antes do início oficial.",
      "Второй игрок должен подключиться к указанной комнате.":"O segundo jogador deve entrar na sala indicada.",
      "09. Обычный сервер и стандартные настройки":"09. Servidor comum e configurações padrão",
      "Использовать пользовательские настройки сервера строго запрещено.":"É estritamente proibido usar configurações personalizadas de servidor.",
      "Матч должен проходить на обычном сервере со стандартными настройками режима.":"A partida deve ocorrer em um servidor comum, com as configurações padrão do modo.",
      "10. Проведение дуэли":"10. Como o duelo acontece",
      "После подключения обоих игроков начинается дуэль. Победа определяется достижением 30 очков. Максимальная продолжительность матча — 30 минут с официального времени начала.":"O duelo começa quando os dois jogadores entram. Vence quem alcançar 30 pontos. A partida pode durar no máximo 30 minutos a partir do horário oficial.",
      "11. Неявка соперника":"11. Ausência do adversário",
      "12. Host не создал комнату":"12. O host não criou a sala",
      "13. Подтверждение результата":"13. Confirmação do resultado",
      "14. Досрочный выход соперника":"14. Saída antecipada do adversário",
      "15. Рейтинг Elo":"15. Rating Elo","16. Жалобы":"16. Denúncias","17. Прочие нарушения и наказания":"17. Outras infrações e penalidades",
      "18. Обязанности и изменение правил":"18. Responsabilidades e alterações nas regras",
      "19. Дополнительные правила поведения в дуэли":"19. Regras adicionais de conduta no duelo",
      "ОБЩИЕ ПРАВИЛА":"REGRAS GERAIS","Look for duels right now":"Encontre um duelo agora",
      "Перейти в Telegram ↗":"Ir para o Telegram ↗","К регистрации ↑":"Voltar ao cadastro ↑"
    }
  };

  const languageNames = {
    ru: "ru", en: "en", "pt-BR": "pt-BR"
  };

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function translatePage(language) {
    const dict = dictionaries[language];
    document.documentElement.lang = languageNames[language] || "ru";
    document.title = language === "en"
      ? "FACEIT — Block Strike Duels"
      : language === "pt-BR"
        ? "FACEIT — Duelos de Block Strike"
        : "FACEIT — Block Strike Duels";

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(node => {
      if (node.__faceitOriginalText === undefined) node.__faceitOriginalText = node.nodeValue;
      const original = node.__faceitOriginalText;
      const key = normalize(original);
      if (language === "ru") {
        node.nodeValue = original;
      } else if (dict[key]) {
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = leading + dict[key] + trailing;
      }
    });

    document.querySelectorAll("img[alt]").forEach(img => {
      if (!img.dataset.originalAlt) img.dataset.originalAlt = img.alt;
      const alt = normalize(img.dataset.originalAlt);
      if (language === "ru") img.alt = img.dataset.originalAlt;
      else if (dict[alt]) img.alt = dict[alt];
    });

    const selectorLabel = document.querySelector(".language-picker");
    if (selectorLabel) selectorLabel.setAttribute("aria-label",
      language === "en" ? "Choose page language" :
      language === "pt-BR" ? "Escolha o idioma da página" : "Выбрать язык страницы");
  }

  selector.addEventListener("change", () => {
    const language = selector.value;
    try { localStorage.setItem("faceit-language", language); } catch (_) {}
    translatePage(language);
  });

  let saved = "ru";
  try { saved = localStorage.getItem("faceit-language") || "ru"; } catch (_) {}
  if (!dictionaries[saved] && saved !== "ru") saved = "ru";
  selector.value = saved;
  translatePage(saved);
})();
