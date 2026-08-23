import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Maryam_Yarandi",
  role: "Developer_개발자",
  introduction: "Hello~",
  description: "게임 개발에 열정을 가지고 있으며, 몰입감 있고 재미있는 게임 경험을 만드는 것을 목표로 하고 있습니다. 컴퓨터공학과 콘텐츠미디어디자인을 공부하며 프로그래밍, 비주얼 디자인, 스토리텔링을 함께 활용해 게임 아이디어를 구현하고 있습니다. 현재는 Unreal Engine과 C++를 중심으로 게임 개발 역량을 꾸준히 쌓으며 다양한 프로젝트를 제작하고 있습니다.",
  image: `${process.env.PUBLIC_URL}/images/1787292476574.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Cv.hwp`,
  links: {
    github: "https://github.com/yarandimaryam24-creator/PETRA_GameCode",
    itchIO: "https://maryamyarandi.itch.io/the-last-survivor",
  }
};

export const games: Game[] = [
  {
    name: "The Last Survivor-마지막 생존자",
    description: "The Last Survivor는 Unreal Engine 5로 제작한 액션 어드벤처 게임입니다. 주인공은 충직한 까마귀와 함께 마을을 지키고, 친구들이 살해된 이유와 그 죽음에 숨겨진 비밀을 밝혀내기 위해 싸워 나갑니다. 근접 전투와 탐험, 어두운 판타지 분위기를 중심으로 몰입감 있고 도전적인 게임 경험을 구현했습니다. 6개월간의 게임 개발 과정과 제가 수행한 모든 작업: 1.기본 캐릭터 시스템을 구현했습니다 Created the basic character system 2. 캐릭터 이동 및 카메라를 설정했습니다 Set up character movement and camera controls 3. Enhanced Input을 구현했습니다 Implemented Enhanced Input 4. 기본 캐릭터와 플레이어 캐릭터 클래스를 생성했습니다 Created the base character and player character classesC++ 5. 상속 및 재사용 가능한 함수를 구현했습니다 Set up C++ inheritance and reusable functions 6.적 캐릭터를 생성했습니다 Created the enemy character 7. 캐릭터 Attribute와 체력 시스템을 구현했습니다 Implemented character attributes and health 8. HUD와 체력 바를 구현했습니다 Created the HUD and health bar 9.무기 시스템을 구현했습니다 Created the weapon system 10. 피격 및 데미지 시스템을 구현했습니다 Implemented the hit and damage system 11. Hit Interface를 구현했습니다 11.Created the hit interface 12. 공격 애니메이션과 몽타주를 추가했습니다 Added attack animations and montages 13. 전투 시스템을 구현했습니다 Implemented the combat system 14. Root Motion과 애니메이션 리타게팅을 설정했습니다 Configured root motion and retargeting 15. 적 AI 행동 시스템을 구현했습니다 Created enemy AI behavior 16. 적 상태 및 전투 행동을 구현했습니다 Implemented enemy states and combat behavior 17.플레이어와 적의 피격 반응을 추가했습니다 Added player and enemy hit reactions 18. Niagara 시각 효과를 추가했습니다 Added Niagara visual effects 19. 전투 사운드 효과를 추가했습니다 Added combat sound effects 20. 아이템 획득 시스템을 구현했습니다 Created pickup items 21. 체력 회복 아이템 시스템을 구현했습니다 Created the health pickup system 22. 게임 환경과 에셋을 통합했습니다 Integrated the game environment and assets 23. 충돌 및 피격 판정 문제를 디버깅했습니다 Debugged collision and hit detection issues 24. 애니메이션과 전투 관련 문제를 수정했습니다 Fixed animation and combat issues",
    genres: ["Adventure", "Action"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/yarandimaryam24-creator/PETRA_GameCode" },
      { source: LinkImageSource.ItchIo, url: "https://maryamyarandi.itch.io/the-last-survivor" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 190708.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=RmiCqE-xOgA", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 190918.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 191330.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 190929.png", type: MediaType.Image },
      { source: "https://https://www.youtube.com/watch?v=M4WGgVzkZ9k", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 190847.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 190901.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 191346.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=Kom9stoN8qc", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 191449.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 191423.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/스크린샷 2026-08-20 191008.png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=wsHmIWMhuwk&t=1540s", type: MediaType.YouTube },
    ],
  },
  {
    name: "기타 프로젝트",
    description: "이 페이지에는 제가 진행한 다양한 프로젝트를 소개하고 있습니다. 3D 디자인 작업과 함께 Unity로 제작한 미니 게임 등 여러 프로젝트를 통해 다양한 툴과 기술을 활용하고 새로운 경험을 쌓았습니다.",
    media: [
      { source: "https://www.youtube.com/shorts/OXpNNqdPzjo", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/pic (1).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (12).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (3).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (4).png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=4l9sJ_2GuXs", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/pic (2).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (5).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (8).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (9).png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=lM1mn_pNl_w", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/pic (10).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (11).png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=TaTYQv4Ba-4", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/pic (6).png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/pic (7).png", type: MediaType.Image },
      { source: "https://www.youtube.com/watch?v=leGHoMZQYqc", type: MediaType.YouTube },
    ],
  }
];
