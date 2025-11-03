function _mounting_extrude_8_outline_fn(){
    return CAG.circle({"center":[81,28.5],"radius":2})
.union(
    CAG.circle({"center":[9,8.5],"radius":2})
).union(
    CAG.circle({"center":[46,-13],"radius":2})
).union(
    CAG.circle({"center":[9,25.5],"radius":2})
).union(
    CAG.circle({"center":[95.2707341,-15.5085036],"radius":2})
).extrude({ offset: [0, 0, 8] });
}


function _mounting_hole_extrude_8_outline_fn(){
    return CAG.circle({"center":[81,28.5],"radius":1})
.union(
    CAG.circle({"center":[9,8.5],"radius":1})
).union(
    CAG.circle({"center":[46,-13],"radius":1})
).union(
    CAG.circle({"center":[9,25.5],"radius":1})
).union(
    CAG.circle({"center":[95.2707341,-15.5085036],"radius":1})
).extrude({ offset: [0, 0, 8] });
}




                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = _mounting_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            

                // creating part 1 of case _holes
                let _holes__part_1 = _mounting_hole_extrude_8_outline_fn();

                // make sure that rotations are relative
                let _holes__part_1_bounds = _holes__part_1.getBounds();
                let _holes__part_1_x = _holes__part_1_bounds[0].x + (_holes__part_1_bounds[1].x - _holes__part_1_bounds[0].x) / 2
                let _holes__part_1_y = _holes__part_1_bounds[0].y + (_holes__part_1_bounds[1].y - _holes__part_1_bounds[0].y) / 2
                _holes__part_1 = translate([-_holes__part_1_x, -_holes__part_1_y, 0], _holes__part_1);
                _holes__part_1 = rotate([0,0,0], _holes__part_1);
                _holes__part_1 = translate([_holes__part_1_x, _holes__part_1_y, 0], _holes__part_1);

                _holes__part_1 = translate([0,0,0], _holes__part_1);
                result = result.subtract(_holes__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return _holes_case_fn();
            }

        