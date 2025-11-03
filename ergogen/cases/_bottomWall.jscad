function _case_outline_extrude_10_8_outline_fn(){
    return new CSG.Path2D([[124.4007976,-6.2282331],[124.6678453,-15.6810646]]).appendArc([124.2866768,-16.9131138],{"radius":2,"clockwise":true,"large":false}).appendPoint([108.1115381,-39.1762824]).appendArc([105.3179335,-39.6187457],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.8730494,-30.5770082]).appendArc([91.7566551,-30.1959178],{"radius":2,"clockwise":false,"large":false}).appendPoint([86.3639767,-30.036289]).appendArc([85.8051189,-29.9392776],{"radius":2,"clockwise":true,"large":false}).appendPoint([72.5183044,-25.6221297]).appendArc([72.2415694,-25.5535791],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.3693887,-25.2293364]).appendArc([70.0280897,-25.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.7182522,-25.2]).appendArc([51.7469664,-24.9483146],{"radius":2,"clockwise":true,"large":false}).appendPoint([29.2530336,-12.4516854]).appendArc([28.2817478,-12.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([-10.8,-12.2]).appendArc([-12.8,-10.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([-12.8,44.2]).appendArc([-10.8,46.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([7.0000002,46.2]).appendArc([7.3960398,46.239604],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.8039602,50.160396]).appendArc([27.1999998,50.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.6438349,50.2]).appendArc([43.6763229,50.4871169],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.312767,52.0763068]).appendArc([47.3688644,52.3632842],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.6943615,52.2059693]).appendArc([61.6420379,51.9544233],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.3469664,50.4516854]).appendArc([65.3182522,50.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.1092751,50.2]).appendArc([81.5958634,49.5379295],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.8,48.2]).appendPoint([99.7958372,48.2]).appendArc([101.563413,47.1357754],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.236587,45.8642246]).appendArc([104.0041628,44.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([122.4,44.8]).appendArc([124.4,42.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([124.4,-6.1717545]).appendArc([124.4007976,-6.2282331],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10.8] });
}


function _board_outline_extrude_10_8_outline_fn(){
    return new CSG.Path2D([[122.4001087,-8.2104273],[122.4743688,-15.334102]]).appendArc([122.0925114,-16.5305202],{"radius":2,"clockwise":true,"large":false}).appendPoint([107.6690746,-36.3826779]).appendArc([104.87547,-36.8251412],{"radius":2,"clockwise":true,"large":false}).appendPoint([92.5795189,-27.8916099]).appendArc([91.1370002,-27.5275392],{"radius":2,"clockwise":false,"large":false}).appendPoint([87.1472373,-28.0648772]).appendArc([86.2622551,-27.9848856],{"radius":2,"clockwise":true,"large":false}).appendPoint([73.1393729,-23.7210027]).appendArc([72.8563813,-23.6513788],{"radius":2,"clockwise":false,"large":false}).appendPoint([70.3663289,-23.228263]).appendArc([70.0312865,-23.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([52.7182522,-23.2]).appendArc([51.7469664,-22.9483146],{"radius":2,"clockwise":true,"large":false}).appendPoint([29.2530336,-10.4516854]).appendArc([28.2817478,-10.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([-8.8,-10.2]).appendArc([-10.8,-8.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([-10.8,42.2]).appendArc([-8.8,44.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([7.0000002,44.2]).appendArc([7.3960398,44.239604],{"radius":2,"clockwise":false,"large":false}).appendPoint([26.8039602,48.160396]).appendArc([27.1999998,48.2],{"radius":2,"clockwise":true,"large":false}).appendPoint([42.6438349,48.2]).appendArc([43.6763229,48.4871169],{"radius":2,"clockwise":false,"large":false}).appendPoint([46.312767,50.0763068]).appendArc([47.3688644,50.3632842],{"radius":2,"clockwise":true,"large":false}).appendPoint([60.6943615,50.2059693]).appendArc([61.6420379,49.9544233],{"radius":2,"clockwise":true,"large":false}).appendPoint([64.3469664,48.4516854]).appendArc([65.3182522,48.2],{"radius":2,"clockwise":false,"large":false}).appendPoint([80.1092751,48.2]).appendArc([81.5958634,47.5379295],{"radius":2,"clockwise":true,"large":false}).appendPoint([82.8,46.2]).appendPoint([97.7958372,46.2]).appendArc([99.563413,45.1357754],{"radius":2,"clockwise":true,"large":false}).appendPoint([100.236587,43.8642246]).appendArc([102.0041628,42.8],{"radius":2,"clockwise":false,"large":false}).appendPoint([120.4,42.8]).appendArc([122.4,40.8],{"radius":2,"clockwise":true,"large":false}).appendPoint([122.4,-8.1895797]).appendArc([122.4001087,-8.2104273],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10.8] });
}




                function _bottomWall_case_fn() {
                    

                // creating part 0 of case _bottomWall
                let _bottomWall__part_0 = _case_outline_extrude_10_8_outline_fn();

                // make sure that rotations are relative
                let _bottomWall__part_0_bounds = _bottomWall__part_0.getBounds();
                let _bottomWall__part_0_x = _bottomWall__part_0_bounds[0].x + (_bottomWall__part_0_bounds[1].x - _bottomWall__part_0_bounds[0].x) / 2
                let _bottomWall__part_0_y = _bottomWall__part_0_bounds[0].y + (_bottomWall__part_0_bounds[1].y - _bottomWall__part_0_bounds[0].y) / 2
                _bottomWall__part_0 = translate([-_bottomWall__part_0_x, -_bottomWall__part_0_y, 0], _bottomWall__part_0);
                _bottomWall__part_0 = rotate([0,0,0], _bottomWall__part_0);
                _bottomWall__part_0 = translate([_bottomWall__part_0_x, _bottomWall__part_0_y, 0], _bottomWall__part_0);

                _bottomWall__part_0 = translate([0,0,0], _bottomWall__part_0);
                let result = _bottomWall__part_0;
                
            

                // creating part 1 of case _bottomWall
                let _bottomWall__part_1 = _board_outline_extrude_10_8_outline_fn();

                // make sure that rotations are relative
                let _bottomWall__part_1_bounds = _bottomWall__part_1.getBounds();
                let _bottomWall__part_1_x = _bottomWall__part_1_bounds[0].x + (_bottomWall__part_1_bounds[1].x - _bottomWall__part_1_bounds[0].x) / 2
                let _bottomWall__part_1_y = _bottomWall__part_1_bounds[0].y + (_bottomWall__part_1_bounds[1].y - _bottomWall__part_1_bounds[0].y) / 2
                _bottomWall__part_1 = translate([-_bottomWall__part_1_x, -_bottomWall__part_1_y, 0], _bottomWall__part_1);
                _bottomWall__part_1 = rotate([0,0,0], _bottomWall__part_1);
                _bottomWall__part_1 = translate([_bottomWall__part_1_x, _bottomWall__part_1_y, 0], _bottomWall__part_1);

                _bottomWall__part_1 = translate([0,0,0], _bottomWall__part_1);
                result = result.subtract(_bottomWall__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return _bottomWall_case_fn();
            }

        