import classNames from "classnames"

const tw = (
  ...classes: (false | null | undefined | string)[]
): string | null => {
    return classNames(classes.filter(Boolean).join(" "));
}
export default tw