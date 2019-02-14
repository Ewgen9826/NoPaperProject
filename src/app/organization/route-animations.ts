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

//Basic
/*export const fader = trigger("routeAnimations", [
  transition("* <=> *", [
    query(":enter, :leave", [
      style({
        position: "absolute",
        left: 0,
        width: "80%",
        opacity: 0
      })
    ]),
    query(":enter", [
      animate("6000ms ease"),
      style({
        opacity: 1
      })
    ])
  ])
]);*/
//Positioned

export const slider = trigger("routerAnimations", [
  transition("* => isLeft", slideTo("left")),
  transition("* => isRight", slideTo("right")),
  transition("isRight => *", slideTo("left")),
  transition("isLeft => *", slideTo("right"))
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          [direction]: 0,
          width: "100%"
        })
      ],
      optional
    ),
    query(":enter", [style({ [direction]: "-100%" })]),
    group([
      query(
        "leave",
        [animate("6000ms ease", style({ [direction]: "100%" }))],
        optional
      ),
      query(":enter", [animate("6000ms ease", style({ [direction]: "0%" }))])
    ])
  ];
}
