# interactive-dashboard

Dashboard for WEB-115.0001

This repository will be used for all future coding projects for WEB-115.0001 course.

## Future Enhancements

- [X] Add a weekly task goal calculator

## Weekly Task Goals

The weekly task goal calculator determines a user's weekly task target based on their daily task goal and any additional weekly bonus tasks. The daily goal is multiplied by five workdays, and the bonus tasks are added to create the total weekly goal.

## Imperial/Metric Converter
This application allows users to convert measurements between US Imperial and Metric units. THe converter supports inches, feet, yards, and miles as Imperial units and centimeters, meters, and kilometers as Metric units.

### Logic and Pseudocode
BEGIN

    INPUT numericValue
    INPUT conversionChoice

    IF conversionChoice = "inch to centimeter" THEN
        SET result = numericValue * 2.54

    ELSE IF conversionChoice = "foot to centimeter" THEN
        SET result = numericValue * 30.48

    ELSE IF conversionChoice = "yard to meter" THEN
        SET result = numericValue * 0.91

    ELSE IF conversionChoice = "mile to kilometer" THEN
        SET result = numericValue * 1.61

    ELSE IF conversionChoice = "centimeter to inch" THEN
        SET result = numericValue * 0.39

    ELSE IF conversionChoice = "centimeter to foot" THEN
        SET result = numericValue * 0.0328

    ELSE IF conversionChoice = "meter to yard" THEN
        SET result = numericValue * 1.09

    ELSE IF conversionChoice = "kilometer to mile" THEN
        SET result = numericValue * 0.62

    ELSE
        OUTPUT "Invalid conversion choice."
    END IF

    OUTPUT result

END