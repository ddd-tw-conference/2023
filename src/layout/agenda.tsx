/** @jsx jsx */
import Link from "@docusaurus/Link";
import { css, jsx } from "@emotion/react";
import { Tab, TabList, TabPanel, Table, Tabs } from "@mui/joy";
import Layout from "@theme/Layout";
import { ReactNode, memo, useMemo } from "react";
import { createContext } from "../components/createContext";
import { DifficultyOff } from "../icons/DifficultyOff";
import { DifficultyOn } from "../icons/DifficultyOn";
import { MaterialSymbolsArrowRight } from "../icons/MaterialSymbolsArrowRight";

type Speaker = {
  name: ReactNode;
  key:
    | "aotokitsuruya"
    | "arthur"
    | "chris_simon"
    | "david_ko"
    | "david_wang"
    | "ean"
    | "fong"
    | "huang_jian"
    | "james_cheng"
    | "james_wang"
    | "ken_ni"
    | "kim_kao"
    | "kuma_syu"
    | "lex_liu"
    | "matthew_wei"
    | "michael"
    | "miles_chou"
    | "nathan_lu"
    | "nina_weng"
    | "soking"
    | "steny_liu"
    | "stephen_tung"
    | "steven_gao"
    | "teddy_chen"
    | "vlad_khononov"
    | "water_ball"
    | "wesley_chiu";
};

type NormalCls = {
  type: "keynote" | "speech" | "workshop";
  speaker: Speaker["key"][];
  key: keyof Translation["session"];
  difficulty: 0 | 1 | 2;
  titleSuffix?: ReactNode;
};

type CommonCls = {
  title: ReactNode;
  type: "common";
};

type RoomInfo = {
  key: "202" | "302" | "303" | "online";
  name: ReactNode;
};

type Day1Section =
  | {
      time: ReactNode;
      classes: [NormalCls, NormalCls, NormalCls] | CommonCls;
    }
  | {
      room: [RoomInfo["key"], RoomInfo["key"], RoomInfo["key"]];
    };

type Day2Section =
  | {
      time: ReactNode;
      classes: NormalCls | CommonCls;
    }
  | {
      room: RoomInfo["key"];
    };

type Translation = {
  layout: {
    title: string;
  };
  common: {
    difficulty: {
      label: string;
    };
    cls: {
      checkIn: ReactNode;
      breakTime: ReactNode;
      lunchTime: ReactNode;
    };
  };
  category: {
    keynote: ReactNode;
    speech: ReactNode;
    workshop: ReactNode;
  };
  speaker: {
    [key in Speaker["key"]]: {
      name: ReactNode;
    };
  };
  session: {
    balancing_coupling_in_software_design_balancing_coupling_in_software_design: ReactNode;
    "importing-domain-driven-design-at-the-right-moment": ReactNode;
    "eventstorming-practical-experience-sharing": ReactNode;
    "practical-experience-of-applying-ddd-and-ca-in-spring-boot-3-java-17": ReactNode;
    "dont-forget-ucd-balanced-teams-reap-the-full-benefits-with-modern-development-practices": ReactNode;
    "secretly-applying-simplified-event-storming-to-information-architecture-design-workshops-for-requirements-exploration": ReactNode;
    "the-superpowers-of-event-sourcing": ReactNode;
    "ddd-applied-introducing-tdd-while-breaking-down-legacy-monolith": ReactNode;
    "exploring-system-observability": ReactNode;
    "when-customers-dont-share-a-language-online": ReactNode;
    "get-hands-on-with-event-sourcing": ReactNode;
    "the-microservices-weve-pursued-over-the-years": ReactNode;
    "achieving-architectural-evolution-and-governance-with-constructor-theory": ReactNode;
    "how-to-clarify-requirements-using-example-mapping": ReactNode;
    "exploring-ddd-in-turbulent-waters-from-confusion-to-enlightenment": ReactNode;
    "modernization-approaches-and-practices-for-complex-legacy-systems-online": ReactNode;
    "from-chaos-to-organization-continuously-improving-with-ddd-clean-architecture": ReactNode;
    "decompressing-cqrs-with-pattern-language-a-case-study-with-ezkanban-system": ReactNode;
    "code-with-me-we-wrote-an-api": ReactNode;
    "the-value-flywheel-effect-guiding-decision-making-in-solution-domain": ReactNode;
    "introducing-ddd-in-my-startup-for-iterative-development-of-a-complex-online-gaming-education-innovation-product": ReactNode;
    "you-dont-know-solid": ReactNode;
    "solo-mission-improving-an-existing-inventory-management-system-with-domain-driven-design-ddd-strategies-and-practices": ReactNode;
    "bridging-the-gap-in-ddd-transitioning-from-strategic-to-tactical-through-effective-modeling-and-design": ReactNode;
    "tactical-ddd-the-art-of-flexibility": ReactNode;
    "domain-storytelling-one-size-fits-all-connecting-requirements-design-development-and-testing-for-product-services": ReactNode;
  };
  rooms: {
    202: ReactNode;
    302: ReactNode;
    303: ReactNode;
    online: ReactNode;
  };
};

const translationContext = createContext<Translation>();

const Day = memo(function Day({
  count,
  date,
}: {
  count: ReactNode;
  date: ReactNode;
}) {
  return (
    <div
      css={css`
        color: #fff;
        font-size: 1rem;
      `}
    >
      <div>{count}</div>
      <div
        css={css`
          font-size: 1.75rem;
        `}
      >
        {date}
      </div>
    </div>
  );
});

const DayAgendaTable = memo(function DayAgendaTable<
  Section extends Day1Section | Day2Section
>({ dayAgenda }: DayAgendaProps<Section>) {
  const translation = translationContext.useContext();
  const rooms = useMemo(
    function rooms() {
      let rooms: RoomInfo["key"][] = [];
      for (let i = 0; i < dayAgenda.sections.length; i++) {
        const section = dayAgenda.sections[i];
        if (!("room" in section)) continue;
        if (Array.isArray(section.room)) {
          rooms.push(...section.room);
        } else {
          rooms.push(section.room);
        }
        break;
      }
      return rooms;
    },
    [dayAgenda.sections]
  );

  const sections = useMemo(() => {
    return dayAgenda.sections.filter(function nonRooms(
      section
    ): section is Exclude<typeof section, { room: any }> {
      return !("room" in section);
    });
  }, [dayAgenda.sections]);
  return (
    <Table
      sx={{
        margin: "auto",
        textAlign: "center",
        position: "relative",
        borderWidth: "1px",
        borderColor: "transparent",
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: 600,
        "&& thead, && tr": {
          backgroundColor: "transparent",
          borderTop: "none",
          borderBottomColor: "transparent",
          borderTopWidth: "0.5rem",
          bottomBorderWidth: "0.5rem",
          borderRightWidth: "0.9rem",
          borderLeftWidth: "0.9rem",
        },
        "td,th": {
          textAlign: "inherit",
          borderWidth: "inherit",
          borderColor: "inherit",
          color: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
        },
        th: {
          "background-color": "transparent",
        },
      }}
    >
      <thead>
        <tr>
          {rooms.map(function room(room) {
            return (
              <th key={room}>
                <div
                  css={css`
                    position: sticky;
                    top: 0;
                    background: #6d8694;
                    height: 5.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 0.125rem;
                  `}
                >
                  {translation.rooms[room]}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sections.map(function mapSection(section, _index) {
          const classes = Array.isArray(section.classes)
            ? section.classes
            : [section.classes];
          return (
            <tr>
              {classes.map(function mapClass(classInfo, index) {
                return classInfo.type === "common" ? (
                  <td key={index} colSpan={rooms.length}>
                    <div
                      css={css`
                        word-break: normal;
                        overflow-wrap: anywhere;
                        white-space: normal;
                      `}
                    >
                      <div>{classInfo.title}</div>
                      <div>{section.time}</div>
                    </div>
                  </td>
                ) : (
                  <td key={index}>
                    <div
                      css={css`
                        border-radius: 0.125rem;
                        height: 100%;
                        text-align: left;
                        word-break: normal;
                        overflow-wrap: anywhere;
                        white-space: normal;
                        padding: 0.75rem 0.5rem;
                        ${classInfo.type === "speech"
                          ? css`
                              background: #5e617c;
                            `
                          : classInfo.type === "keynote"
                          ? css`
                              background: #c29d88;
                            `
                          : css`
                              background: #5d7e5e;
                            `}
                      `}
                    >
                      <div>
                        {translation.session[classInfo.key]}
                        {!classInfo.titleSuffix
                          ? ""
                          : ` ${classInfo.titleSuffix}`}
                      </div>
                      <div
                        css={css`
                          font-size: 1.25rem;
                        `}
                      >
                        <div
                          css={css`
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            flex-wrap: wrap;
                            justify-content: space-between;
                          `}
                        >
                          <div
                            css={css`
                              display: flex;
                              align-items: center;
                              gap: 0.5rem;
                            `}
                          >
                            <div>{translation.common.difficulty.label}</div>
                            <div>
                              {Array.from(Array(2)).map((_, index) =>
                                index < classInfo.difficulty ? (
                                  <DifficultyOn />
                                ) : (
                                  <DifficultyOff />
                                )
                              )}
                            </div>
                          </div>
                          <div>{section.time}</div>
                        </div>
                        <ul
                          css={css`
                            padding: 0;
                            margin: 0;
                          `}
                        >
                          {classInfo.speaker.map(function mapSpeaker(s) {
                            return (
                              <li
                                key={s}
                                css={css`
                                  list-style-type: none;
                                  display: flex;
                                  align-items: center;
                                  gap: 0.5rem;
                                `}
                              >
                                <Link
                                  css={css`
                                    display: flex;
                                    align-items: center;
                                    &:not(:focus, :hover, :active) {
                                      color: inherit;
                                    }
                                  `}
                                  to={`/speaker/${s}`}
                                >
                                  <MaterialSymbolsArrowRight />
                                  {translation.speaker[s].name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
});

type DayAgendaProps<Section extends Day1Section | Day2Section> = {
  dayAgenda: {
    sections: Section[];
  };
};

const DayAgenda = memo(function DayAgenda<
  Section extends Day1Section | Day2Section
>({ dayAgenda }: DayAgendaProps<Section>) {
  const translation = translationContext.useContext();
  const rooms = useMemo(
    function rooms() {
      let rooms: RoomInfo["key"][] = [];
      for (let i = 0; i < dayAgenda.sections.length; i++) {
        const section = dayAgenda.sections[i];
        if (!("room" in section)) continue;
        if (Array.isArray(section.room)) {
          rooms.push(...section.room);
        } else {
          rooms.push(section.room);
        }
        break;
      }
      return rooms;
    },
    [dayAgenda.sections]
  );
  const sectionsByRoom = useMemo(() => {
    const sectionsByRoom = rooms.map(function roomsMap(room, index) {
      return [
        room,
        {
          ...dayAgenda,
          sections: dayAgenda.sections.map(function mapSection(section) {
            return "classes" in section && Array.isArray(section.classes)
              ? {
                  ...section,
                  classes: section.classes[index],
                }
              : "room" in section && Array.isArray(section.room)
              ? {
                  ...section,
                  room: section.room[index],
                }
              : section;
          }),
        },
      ];
    });
    return Object.fromEntries(sectionsByRoom);
  }, [dayAgenda, rooms]);
  return (
    <div>
      <ul
        css={css`
          width: fit-content;
          margin-left: auto;
          padding: 0 1rem;
          & li {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            > div:first-of-type {
              height: 1rem;
              width: 1rem;
              border-radius: 50%;
              background: var(--color);
            }
            > div:nth-of-type(2) {
              color: var(--color);
            }
          }
        `}
      >
        <li
          css={css`
            --color: #c29d88;
          `}
        >
          <div />
          <div>{translation.category.keynote}</div>
        </li>
        <li
          css={css`
            --color: #5e617c;
          `}
        >
          <div />
          <div>{translation.category.speech}</div>
        </li>
        <li
          css={css`
            --color: #5d7e5e;
          `}
        >
          <div />
          <div>{translation.category.workshop}</div>
        </li>
      </ul>

      <div>
        <div
          css={css`
            @media (max-width: 767px) {
              display: none;
            }
            position: relative;
          `}
        >
          <DayAgendaTable dayAgenda={dayAgenda} />
        </div>
        <div
          css={css`
            @media (min-width: 768px) {
              display: none;
            }
            display: flex;
            flex-direction: column;
            gap: 2rem;
            position: relative;
          `}
        >
          {rooms.map(function mapRoom(room) {
            return <DayAgendaTable dayAgenda={sectionsByRoom[room]} />;
          })}
        </div>
      </div>
    </div>
  );
});

const Time = memo(function Time({
  start,
  end,
}: {
  start?: ReactNode;
  end?: ReactNode;
}) {
  return (
    <div>
      {start} ~ {end}
    </div>
  );
});

const Agenda = memo(function Agenda() {
  const translation = translationContext.useContext();
  const day1Agenda = useMemo(
    function day1Agenda() {
      const ret: DayAgendaProps<Day1Section>["dayAgenda"] = {
        sections: [
          {
            room: ["303", "202", "302"],
          },
          {
            time: <Time start="08:30" end="" />,
            classes: { type: "common", title: translation.common.cls.checkIn },
          },
          {
            time: <Time start="09:30" end="10:15" />,
            classes: [
              {
                type: "keynote",
                difficulty: 1,
                key: "balancing_coupling_in_software_design_balancing_coupling_in_software_design",
                speaker: ["vlad_khononov"],
              },
              {
                type: "speech",
                difficulty: 1,
                key: "eventstorming-practical-experience-sharing",
                speaker: ["aotokitsuruya"],
              },
              {
                type: "speech",
                difficulty: 1,
                key: "balancing_coupling_in_software_design_balancing_coupling_in_software_design",
                speaker: ["nina_weng"],
              },
            ],
          },
          {
            time: <Time start="10:15" end="10:30" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="10:30" end="11:15" />,
            classes: [
              {
                type: "speech",
                difficulty: 1,
                key: "practical-experience-of-applying-ddd-and-ca-in-spring-boot-3-java-17",
                speaker: ["huang_jian"],
              },
              {
                type: "speech",
                difficulty: 1,
                key: "dont-forget-ucd-balanced-teams-reap-the-full-benefits-with-modern-development-practices",
                speaker: ["matthew_wei", "wesley_chiu"],
              },
              {
                type: "workshop",
                difficulty: 1,
                key: "secretly-applying-simplified-event-storming-to-information-architecture-design-workshops-for-requirements-exploration",
                titleSuffix: "(1/2)",
                speaker: ["soking"],
              },
            ],
          },
          {
            time: <Time start="11:15" end="11:30" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="11:30" end="12:15" />,
            classes: [
              {
                type: "speech",
                difficulty: 2,
                key: "the-superpowers-of-event-sourcing",
                speaker: ["stephen_tung"],
              },
              {
                type: "speech",
                difficulty: 2,
                key: "ddd-applied-introducing-tdd-while-breaking-down-legacy-monolith",
                speaker: ["james_cheng"],
              },
              {
                type: "workshop",
                difficulty: 1,
                key: "secretly-applying-simplified-event-storming-to-information-architecture-design-workshops-for-requirements-exploration",
                titleSuffix: "(2/2)",
                speaker: ["soking"],
              },
            ],
          },
          {
            time: <Time start="12:15" end="13:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.lunchTime,
            },
          },
          {
            time: <Time start="13:15" end="14:00" />,
            classes: [
              {
                type: "speech",
                difficulty: 1,
                key: "exploring-system-observability",
                speaker: ["nathan_lu"],
              },
              {
                type: "speech",
                difficulty: 2,
                key: "when-customers-dont-share-a-language-online",
                speaker: ["chris_simon"],
              },
              {
                type: "speech",
                difficulty: 1,
                key: "get-hands-on-with-event-sourcing",
                speaker: ["lex_liu"],
              },
            ],
          },
          {
            time: <Time start="14:00" end="14:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="14:15" end="15:00" />,
            classes: [
              {
                type: "speech",
                difficulty: 1,
                key: "the-microservices-weve-pursued-over-the-years",
                speaker: ["ken_ni"],
              },
              {
                type: "speech",
                difficulty: 2,
                key: "achieving-architectural-evolution-and-governance-with-constructor-theory",
                speaker: ["david_wang"],
              },
              {
                type: "workshop",
                difficulty: 1,
                key: "how-to-clarify-requirements-using-example-mapping",
                speaker: ["david_ko"],
                titleSuffix: "(1/2)",
              },
            ],
          },
          {
            time: <Time start="15:00" end="15:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="15:15" end="16:00" />,
            classes: [
              {
                type: "speech",
                difficulty: 1,
                key: "exploring-ddd-in-turbulent-waters-from-confusion-to-enlightenment",
                speaker: ["miles_chou"],
              },
              {
                type: "speech",
                difficulty: 1,
                key: "modernization-approaches-and-practices-for-complex-legacy-systems-online",
                speaker: ["steven_gao"],
              },
              {
                type: "workshop",
                difficulty: 1,
                key: "how-to-clarify-requirements-using-example-mapping",
                speaker: ["david_ko"],
                titleSuffix: "(2/2)",
              },
            ],
          },
          {
            time: <Time start="16:00" end="16:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="16:15" end="17:45" />,
            classes: [
              {
                type: "speech",
                difficulty: 1,
                key: "from-chaos-to-organization-continuously-improving-with-ddd-clean-architecture",
                speaker: ["steny_liu"],
              },
              {
                type: "speech",
                difficulty: 2,
                key: "decompressing-cqrs-with-pattern-language-a-case-study-with-ezkanban-system",
                speaker: ["teddy_chen"],
              },
              {
                type: "workshop",
                difficulty: 1,
                key: "code-with-me-we-wrote-an-api",
                speaker: ["kuma_syu"],
              },
            ],
          },
        ],
      };
      return ret;
    },
    [
      translation.common.cls.breakTime,
      translation.common.cls.checkIn,
      translation.common.cls.lunchTime,
    ]
  );

  const day2Agenda = useMemo(
    function day2Agenda() {
      const ret: DayAgendaProps<Day2Section>["dayAgenda"] = {
        sections: [
          {
            room: "online",
          },
          {
            time: <Time start="09:30" end="10:15" />,
            classes: {
              type: "speech",
              difficulty: 2,
              key: "the-value-flywheel-effect-guiding-decision-making-in-solution-domain",
              speaker: ["kim_kao"],
            },
          },
          {
            time: <Time start="10:15" end="10:30" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="10:30" end="11:15" />,
            classes: {
              type: "speech",
              difficulty: 1,
              key: "introducing-ddd-in-my-startup-for-iterative-development-of-a-complex-online-gaming-education-innovation-product",
              speaker: ["water_ball"],
            },
          },
          {
            time: <Time start="11:15" end="11:30" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="11:30" end="12:15" />,
            classes: {
              type: "speech",
              difficulty: 2,
              key: "you-dont-know-solid",
              speaker: ["fong"],
            },
          },
          {
            time: <Time start="12:15" end="13:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.lunchTime,
            },
          },
          {
            time: <Time start="13:15" end="14:00" />,
            classes: {
              type: "speech",
              difficulty: 1,
              key: "solo-mission-improving-an-existing-inventory-management-system-with-domain-driven-design-ddd-strategies-and-practices",
              speaker: ["ean"],
            },
          },
          {
            time: <Time start="14:00" end="14:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="14:15" end="15:00" />,
            classes: {
              type: "speech",
              difficulty: 2,
              key: "bridging-the-gap-in-ddd-transitioning-from-strategic-to-tactical-through-effective-modeling-and-design",
              speaker: ["james_wang"],
            },
          },
          {
            time: <Time start="15:00" end="15:15" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="15:15" end="16:15" />,
            classes: {
              type: "speech",
              difficulty: 1,
              key: "tactical-ddd-the-art-of-flexibility",
              speaker: ["arthur"],
            },
          },
          {
            time: <Time start="16:15" end="16:30" />,
            classes: {
              type: "common",
              title: translation.common.cls.breakTime,
            },
          },
          {
            time: <Time start="16:30" end="17:30" />,
            classes: {
              type: "speech",
              difficulty: 1,
              key: "domain-storytelling-one-size-fits-all-connecting-requirements-design-development-and-testing-for-product-services",
              speaker: ["michael"],
            },
          },
        ],
      };
      return ret;
    },
    [translation.common.cls.breakTime, translation.common.cls.lunchTime]
  );
  return (
    <Layout title={translation.layout.title}>
      <Tabs
        defaultValue={1}
        sx={{
          ml: "auto",
          mr: "auto",
          mt: "2.5rem",
          display: "inline-flex",
          alignItems: "flex-start",
          gap: "1.25rem",
          background: "transparent",
        }}
      >
        <TabList
          sx={{
            flexWrap: "wrap",
            gap: "1.25rem",
            background: "transparent",
            ml: "auto",
            mr: "auto",
            "&& > *": {
              minWidth: "fit-content",
              flex: 0,
              margin: "auto",
              background: "transparent",
              boxShadow: "none",
              borderRadius: 0,
              borderBottom: "0.25rem solid transparent",
              "&.Joy-selected": {
                borderColor: "var(--ifm-color-primary)",
              },
            },
          }}
        >
          <Tab value={1}>
            <Day count="Day 1" date="2023 / 9 / 16" />
          </Tab>
          <Tab value={2}>
            <Day count="Day 2" date="2023 / 9 / 17" />
          </Tab>
        </TabList>
        <TabPanel value={1}>
          <DayAgenda dayAgenda={day1Agenda} />
        </TabPanel>
        <TabPanel value={2}>
          <DayAgenda dayAgenda={day2Agenda} />
        </TabPanel>
      </Tabs>
    </Layout>
  );
});

export { Agenda, Translation, translationContext };
