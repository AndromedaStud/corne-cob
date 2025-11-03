function _case_outline_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[124.4007976,-6.2282331],[124.6678453,-15.6810646]]).appendArc([124.2866768,-16.9131138],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.1115381,-39.1762824]).appendArc([105.3179335,-39.6187457],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.8730494,-30.5770082]).appendArc([91.7566551,-30.1959178],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.3639767,-30.036289]).appendArc([85.8051189,-29.9392776],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.5183044,-25.6221297]).appendArc([72.2415694,-25.5535791],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.3693887,-25.2293364]).appendArc([70.0280897,-25.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.7182522,-25.2]).appendArc([51.7469664,-24.9483146],{"radius":2,"clockwise":true,"large":false}).appendPoint([29.2530336,-12.4516854]).appendArc([28.2817478,-12.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10.8,-12.2]).appendArc([-12.8,-10.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12.8,44.2]).appendArc([-10.8,46.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([7.0000002,46.2]).appendArc([7.3960398,46.239604],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.8039602,50.160396]).appendArc([27.1999998,50.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.6438349,50.2]).appendArc([43.6763229,50.4871169],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.312767,52.0763068]).appendArc([47.3688644,52.3632842],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.6943615,52.2059693]).appendArc([61.6420379,51.9544233],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.3469664,50.4516854]).appendArc([65.3182522,50.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.1092751,50.2]).appendArc([81.5958634,49.5379295],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.8,48.2]).appendPoint([99.7958372,48.2]).appendArc([101.563413,47.1357754],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.236587,45.8642246]).appendArc([104.0041628,44.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([122.4,44.8]).appendArc([124.4,42.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.4,-6.1717545]).appendArc([124.4007976,-6.2282331],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1.2] });
}


function _key_outline_extrude_1_2_outline_fn(){
    return new CSG.Path2D([[95.9723843,-22.1986222],[107.2986222,-30.4276157]]).appendPoint([115.5276157,-19.1013778]).appendPoint([104.2013778,-10.8723843]).appendPoint([95.9723843,-22.1986222]).close().innerToCAG()
.union(
    new CSG.Path2D([[56,-20],[70,-20]]).appendPoint([70,-6]).appendPoint([56,-6]).appendPoint([56,-20]).close().innerToCAG()
).union(
    new CSG.Path2D([[83,29],[97,29]]).appendPoint([97,43]).appendPoint([83,43]).appendPoint([83,29]).close().innerToCAG()
).union(
    new CSG.Path2D([[83,12],[97,12]]).appendPoint([97,26]).appendPoint([83,26]).appendPoint([83,12]).close().innerToCAG()
).union(
    new CSG.Path2D([[83,-5],[97,-5]]).appendPoint([97,9]).appendPoint([83,9]).appendPoint([83,-5]).close().innerToCAG()
).union(
    new CSG.Path2D([[65,31],[79,31]]).appendPoint([79,45]).appendPoint([65,45]).appendPoint([65,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[65,14],[79,14]]).appendPoint([79,28]).appendPoint([65,28]).appendPoint([65,14]).close().innerToCAG()
).union(
    new CSG.Path2D([[65,-3],[79,-3]]).appendPoint([79,11]).appendPoint([65,11]).appendPoint([65,-3]).close().innerToCAG()
).union(
    new CSG.Path2D([[47,33],[61,33]]).appendPoint([61,47]).appendPoint([47,47]).appendPoint([47,33]).close().innerToCAG()
).union(
    new CSG.Path2D([[47,16],[61,16]]).appendPoint([61,30]).appendPoint([47,30]).appendPoint([47,16]).close().innerToCAG()
).union(
    new CSG.Path2D([[47,-1],[61,-1]]).appendPoint([61,13]).appendPoint([47,13]).appendPoint([47,-1]).close().innerToCAG()
).union(
    new CSG.Path2D([[29,31],[43,31]]).appendPoint([43,45]).appendPoint([29,45]).appendPoint([29,31]).close().innerToCAG()
).union(
    new CSG.Path2D([[29,14],[43,14]]).appendPoint([43,28]).appendPoint([29,28]).appendPoint([29,14]).close().innerToCAG()
).union(
    new CSG.Path2D([[29,-3],[43,-3]]).appendPoint([43,11]).appendPoint([29,11]).appendPoint([29,-3]).close().innerToCAG()
).union(
    new CSG.Path2D([[11,27],[25,27]]).appendPoint([25,41]).appendPoint([11,41]).appendPoint([11,27]).close().innerToCAG()
).union(
    new CSG.Path2D([[11,10],[25,10]]).appendPoint([25,24]).appendPoint([11,24]).appendPoint([11,10]).close().innerToCAG()
).union(
    new CSG.Path2D([[11,-7],[25,-7]]).appendPoint([25,7]).appendPoint([11,7]).appendPoint([11,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,27],[7,27]]).appendPoint([7,41]).appendPoint([-7,41]).appendPoint([-7,27]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,10],[7,10]]).appendPoint([7,24]).appendPoint([-7,24]).appendPoint([-7,10]).close().innerToCAG()
).union(
    new CSG.Path2D([[-7,-7],[7,-7]]).appendPoint([7,7]).appendPoint([-7,7]).appendPoint([-7,-7]).close().innerToCAG()
).union(
    new CSG.Path2D([[74.1794854,-20.6942767],[87.4942767,-25.0205146]]).appendPoint([91.8205146,-11.7057233]).appendPoint([78.5057233,-7.3794854]).appendPoint([74.1794854,-20.6942767]).close().innerToCAG()
).extrude({ offset: [0, 0, 1.2] });
}


function _mounting_hole_extrude_1_2_outline_fn(){
    return CAG.circle({"center":[81,28.5],"radius":1})
.union(
    CAG.circle({"center":[9,8.5],"radius":1})
).union(
    CAG.circle({"center":[46,-13],"radius":1})
).union(
    CAG.circle({"center":[9,25.5],"radius":1})
).union(
    CAG.circle({"center":[95.2707341,-15.5085036],"radius":1})
).extrude({ offset: [0, 0, 1.2] });
}




                function topCase_case_fn() {
                    

                // creating part 0 of case topCase
                let topCase__part_0 = _case_outline_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let topCase__part_0_bounds = topCase__part_0.getBounds();
                let topCase__part_0_x = topCase__part_0_bounds[0].x + (topCase__part_0_bounds[1].x - topCase__part_0_bounds[0].x) / 2
                let topCase__part_0_y = topCase__part_0_bounds[0].y + (topCase__part_0_bounds[1].y - topCase__part_0_bounds[0].y) / 2
                topCase__part_0 = translate([-topCase__part_0_x, -topCase__part_0_y, 0], topCase__part_0);
                topCase__part_0 = rotate([0,0,0], topCase__part_0);
                topCase__part_0 = translate([topCase__part_0_x, topCase__part_0_y, 0], topCase__part_0);

                topCase__part_0 = translate([0,0,0], topCase__part_0);
                let result = topCase__part_0;
                
            

                // creating part 1 of case topCase
                let topCase__part_1 = _key_outline_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let topCase__part_1_bounds = topCase__part_1.getBounds();
                let topCase__part_1_x = topCase__part_1_bounds[0].x + (topCase__part_1_bounds[1].x - topCase__part_1_bounds[0].x) / 2
                let topCase__part_1_y = topCase__part_1_bounds[0].y + (topCase__part_1_bounds[1].y - topCase__part_1_bounds[0].y) / 2
                topCase__part_1 = translate([-topCase__part_1_x, -topCase__part_1_y, 0], topCase__part_1);
                topCase__part_1 = rotate([0,0,0], topCase__part_1);
                topCase__part_1 = translate([topCase__part_1_x, topCase__part_1_y, 0], topCase__part_1);

                topCase__part_1 = translate([0,0,0], topCase__part_1);
                result = result.subtract(topCase__part_1);
                
            

                // creating part 2 of case topCase
                let topCase__part_2 = _mounting_hole_extrude_1_2_outline_fn();

                // make sure that rotations are relative
                let topCase__part_2_bounds = topCase__part_2.getBounds();
                let topCase__part_2_x = topCase__part_2_bounds[0].x + (topCase__part_2_bounds[1].x - topCase__part_2_bounds[0].x) / 2
                let topCase__part_2_y = topCase__part_2_bounds[0].y + (topCase__part_2_bounds[1].y - topCase__part_2_bounds[0].y) / 2
                topCase__part_2 = translate([-topCase__part_2_x, -topCase__part_2_y, 0], topCase__part_2);
                topCase__part_2 = rotate([0,0,0], topCase__part_2);
                topCase__part_2 = translate([topCase__part_2_x, topCase__part_2_y, 0], topCase__part_2);

                topCase__part_2 = translate([0,0,0], topCase__part_2);
                result = result.subtract(topCase__part_2);
                
            
                    return result;
                }
            
            
        
            function main() {
                return topCase_case_fn();
            }

        