import {
  trigger,
  transition,
  style,
  group,
  query,
  animate
} from "@angular/animations";

export const fadeAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(":enter", [style({ opacity: 0 })], { optional: true }),
    query(
      ":leave",
      [style({ opacity: 1 }), animate("0.3s", style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ":enter",
      [style({ opacity: 0 }), animate("0.3s", style({ opacity: 1 }))],
      { optional: true }
    )
  ])
]);

export const sliderAnimation = trigger("sliderAnimation", [
  transition("* => isEmployees", slideTo("right")),

  transition("* => isClients", slideTo("right")),

  transition("* => isNotifications", slideTo("right")),

  transition("* => isAnalytics", slideTo("right")),

  transition("* => isSettings", slideTo("right"))
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "relative",
          [direction]: 0,
          width: "100%"
        })
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%" })]),
    group([
      query(
        ":leave",
        [animate("600ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [animate("600ms ease", style({ [direction]: "0%" }))])
    ])
  ];
}
