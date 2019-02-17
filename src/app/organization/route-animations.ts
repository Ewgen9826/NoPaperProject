import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from "@angular/animations";

export const slider = trigger("routeAnimations", [
  transition("* => isEmployees", slideTo("right")),
  //transition("isEmployees => isClients", slideTo("left")),

  //transition("isEmployees => isClients", slideTo("left")),
  transition("* => isClients", slideTo("right")),

  transition("* => isNotifications", slideTo("right")),
  //transition("isNotifications => *", slideTo("left")),

  transition("* => isAnalytics", slideTo("right")),
  //transition("isAnalytics => *", slideTo("left")),

  transition("* => isSettings", slideTo("right"))
  //transition("isSettings => *", slideTo("left"))
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
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}
