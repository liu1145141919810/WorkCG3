var points = []; //顶点的属性：坐标数组
var colors = []; //顶点的属性：颜色数组
var filename="Pokemon/base.obj"
var maxx=-Infinity,minx=+Infinity,maxy=-Infinity,miny=+Infinity,maxz=-Infinity,minz=+Infinity; //模型边界值
const VertexColors = [
    vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
    vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
    vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
    vec4( 0.0, 0.5, 0.0, 1.0 ),  // light-green        
    vec4( 0.0, 0.0, 0.5, 1.0 ),  // light-blue
    vec4( 0.5, 0.0, 0.0, 1.0 ),  // light-red
    vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    vec4( 0.5, 0.5, 0.5, 1.0 )   // grey
];// 常量颜色

/****************************************************
 * 坐标轴模型：X轴，Y轴，Z轴的顶点位置和颜色,(-1,1)范围内定义 
 ****************************************************/
function update(x,y,z){
    //console.log(x,y,z);
    maxx=Math.max(maxx,x);
    minx=Math.min(minx,x);
    maxy=Math.max(maxy,y);
    miny=Math.min(miny,y);
    maxz=Math.max(maxz,z);
    minz=Math.min(minz,z);
}
function vertextsXYZ()
{
    const len = 0.9;
    var XYZaxis = [
        vec4(-len,  0.0,  0.0, 1.0), // X
        vec4( len,  0.0,  0.0, 1.0),
        vec4( len, 0.0, 0.0, 1.0),
        vec4(len-0.01, 0.01, 0.0, 1.0),
        vec4(len, 0.0, 0.0, 1.0),
        vec4(len-0.01, -0.01, 0.0, 1.0),
        
        vec4( 0.0, -len,  0.0, 1.0), // Y
        vec4( 0.0,  len,  0.0, 1.0),
        vec4( 0.0, len,0.0, 1.0),
        vec4(0.01, len-0.01, 0.0, 1.0),
        vec4(0.0, len, 0.0, 1.0),
        vec4(-0.01, len-0.01, 0.0, 1.0),
        
        vec4( 0.0,  0.0, -len, 1.0), // Z
        vec4( 0.0,  0.0,  len, 1.0),
        vec4( 0.0, 0.0, len, 1.0),
        vec4( 0.01, 0.0,  len-0.01, 1.0),
        vec4( 0.0, 0.0, len, 1.0),
        vec4( -0.01,0.0,  len-0.01, 1.0)
    ];
    
    var XYZColors = [
        vec4(1.0, 0.0, 0.0, 1.0),  // red
        vec4(0.0, 1.0, 0.0, 1.0),  // green
        vec4(0.0, 0.0, 1.0, 1.0),  // blue
    ];
    
    for (var i = 0; i < XYZaxis.length; i++){    
        points.push(XYZaxis[i]);
        var j = Math.trunc(i/6); // JS取整运算Math.trunc//每个方向轴用6个顶点
        colors.push(XYZColors[j]);
    }
}

/****************************************************
 * 立方体模型生成
 ****************************************************/
function generateCube()
{
    quad( 1, 0, 3, 2 ); //Z正-前
    quad( 4, 5, 6, 7 ); //Z负-后
    
    quad( 2, 3, 7, 6 ); //X正-右
    quad( 5, 4, 0, 1 ); //X负-左
    
    quad( 6, 5, 1, 2 ); //Y正-上
    quad( 3, 0, 4, 7 ); //Y负-下
} 

function quad(a, b, c, d) 
{
	const vertexMC = 0.5; // 顶点分量X,Y,Z到原点距离
    var vertices = [
        vec4( -vertexMC, -vertexMC,  vertexMC, 1.0 ), //Z正前面左下角点V0，顺时针四点0~3
        vec4( -vertexMC,  vertexMC,  vertexMC, 1.0 ),
        vec4(  vertexMC,  vertexMC,  vertexMC, 1.0 ),
        vec4(  vertexMC, -vertexMC,  vertexMC, 1.0 ),
        vec4( -vertexMC, -vertexMC, -vertexMC, 1.0 ),   //Z负后面左下角点V4，顺时针四点4~7
        vec4( -vertexMC,  vertexMC, -vertexMC, 1.0 ),
        vec4(  vertexMC,  vertexMC, -vertexMC, 1.0 ),
        vec4(  vertexMC, -vertexMC, -vertexMC, 1.0 )
    ];

    var indices = [ a, b, c, a, c, d ];
    for ( var i = 0; i < indices.length; ++i ) {
        update(vertices[indices[i]][0],vertices[indices[i]][1],vertices[indices[i]][2]);
        points.push(vertices[indices[i]]);  // 保存一个顶点坐标到定点给数组vertices中        
        colors.push(VertexColors[a]); // 立方体每面为单色
    }
}

/****************************************************
 * 球体模型生成：由四面体递归生成
 ****************************************************/
function generateSphere(){
    // 细分次数和顶点
    const numTimesToSubdivide = 5; // 球体细分次数
    var va = vec4(0.0, 0.0, -1.0, 1.0);
    var vb = vec4(0.0, 0.942809, 0.333333, 1.0);
    var vc = vec4(-0.816497, -0.471405, 0.333333, 1.0);
    var vd = vec4(0.816497, -0.471405, 0.333333, 1.0);
    
    function triangle(a, b, c) {
        points.push(a);
        points.push(b);
        points.push(c);

        update(a[0],a[1],a[2]);
        update(b[0],b[1],b[2]);
        update(c[0],c[1],c[2]);
        
        colors.push(vec4(0.0, 1.0, 1.0, 1.0));
        colors.push(vec4(0.0, 0.0, 0.0, 1.0));
        colors.push(vec4(1.0, 1.0, 0.0, 1.0));
    };

    function divideTriangle(a, b, c, count) {
        if ( count > 0 ) {
            var ab = mix( a, b, 0.5);
            var ac = mix( a, c, 0.5);
            var bc = mix( b, c, 0.5);

            ab = normalize(ab, true);
            ac = normalize(ac, true);
            bc = normalize(bc, true);

            divideTriangle(  a, ab, ac, count - 1 );
            divideTriangle( ab,  b, bc, count - 1 );
            divideTriangle( bc,  c, ac, count - 1 );
            divideTriangle( ab, bc, ac, count - 1 );
        }
        else {
            triangle( a, b, c );
        }
    }

    function tetrahedron(a, b, c, d, n) {
        divideTriangle(a, b, c, n);
        divideTriangle(d, c, b, n);
        divideTriangle(a, d, b, n);
        divideTriangle(a, c, d, n);
    };

    tetrahedron(va, vb, vc, vd, numTimesToSubdivide); // 递归细分生成球体
}

/****************************************************
* TODO1: 墨西哥帽模型生成，等距细分得z,x，函数计算得到y
****************************************************/
function generateHat()
{
    
    // 这里(x,z)是区域（-1，-1）到（1，1）平均划分成nRows*nColumns得到的交点坐标；
    var nRows = 11; // 线数，实际格数=nRows-1,
    var nColumns =11; // 线数,实际格数=nColumns-1
    // 嵌套数组data用于存储网格上交叉点的高值(y)值。
    var data = new Array(nRows);
    for(var i = 0; i < nRows; i++) {
        data[i] = new Array(nColumns);
    };
    // Mexican hat 函数 (常用形式)： y = (1 - r^2) * exp(-0.5 * r^2)
    // todo：遍历网格上每个点，求点的高度(即Y值)
    for(var i=0;i<nRows;i++){
        for(var j=0;j<nColumns;j++){
            var x = -1 + 2*(i/(nRows-1)); // x  坐标值，-1到1
            var z = -1 + 2*(j/(nColumns-1)); // z坐标值，-1到1
            var r = Math.sqrt(x*x + z*z);
            r=r*2;
            // 计算y值，墨西哥帽函数公式
            var y = (1 - r*r) * Math.exp(-0.5 * r*r); 
            data[i][j] = y; // 存储高度值
            update(x,y,z);
        }
    }
    // todo：顶点数据按每四个片元构成一个四边形网格图元，存放顶点属性用points.push(),colors.push()，颜色可以随意
    for(var i = 0; i < nRows - 1; i++) {//处理格子要-1
        for(var j = 0; j < nColumns - 1; j++) {
            var x1 = -1 + 2*(i/(nRows-1));
            var z1 = -1 + 2*(j/(nColumns-1));
            var y1 = data[i][j];
            var x2 = -1 + 2*((i+1)/(nRows-1));
            var z2 = -1 + 2*(j/(nColumns-1));
            var y2 = data[i+1][j];
            var x3 = -1 + 2*((i+1)/(nRows-1));
            var z3 = -1 + 2*((j+1)/(nColumns-1));
            var y3 = data[i+1][j+1];
            var x4 = -1 + 2*(i/(nRows-1));
            var z4 = -1 + 2*((j+1)/(nColumns-1));
            var y4 = data[i][j+1];
            // 四边形由两个三角形组成
            points.push(vec4(x1, y1, z1, 1.0));
            points.push(vec4(x2, y2, z2, 1.0));
            points.push(vec4(x3, y3, z3, 1.0));
            colors.push(vec4(0.0, 1.0, 1.0, 1.0));
            colors.push(vec4(0.0, 0.0, 0.0, 1.0));
            colors.push(vec4(1.0, 1.0, 0.0, 1.0));
            points.push(vec4(x1, y1, z1, 1.0));
            points.push(vec4(x3, y3, z3, 1.0));
            points.push(vec4(x4, y4, z4, 1.0));
            colors.push(vec4(0.0, 1.0, 1.0, 1.0));
            colors.push(vec4(0.0, 0.0, 0.0, 1.0));
            colors.push(vec4(1.0, 1.0, 0.0, 1.0));
        }
    }
}

/*===================================
    加载下载的obj文件
=====================================*/
function loadOBJ(){
    var vertices = [];
    var faces = [];
    var objText = loadFileAJAX(filename); //同步加载OBJ文件内容
    var lines = objText.split('\n');
    
    for (var i = 0; i < lines.length; i++) {
        var parts = lines[i].trim().split(/\s+/);
        
        if (parts[0] === 'v') {
            // 顶点坐标
            vertices.push([
                parseFloat(parts[1]),
                parseFloat(parts[2]),
                parseFloat(parts[3])
            ]);
        } else if (parts[0] === 'f') {
            // 面索引（支持 f 1 2 3 格式）
            var face = [];
            for (var j = 1; j < parts.length; j++) {
                var index = parseInt(parts[j].split('/')[0]) - 1;
                face.push(index);
            }
            faces.push(face);
        }
    }
    console.log("Loaded vertices:", vertices.length);
    console.log("Loaded faces:", faces.length);
    for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        // 三角形面
        if (face.length === 3) {
            for (var j = 0; j < 3; j++) {
                var v = vertices[face[j]];
                console.log("puting vertex:", v);
                points.push(vec4(v[0], v[1], v[2], 1.0));
                colors.push(vec4(0.5, 0.5, 0.8, 1.0)); // 默认颜色
            }
        }
        // 四边形面，分割为两个三角形
       else if (face.length === 4) {
            // 第一个三角形 [0,1,2]
            var v0 = vec3(vertices[face[0]][0], vertices[face[0]][1], vertices[face[0]][2]);
            var v1 = vec3(vertices[face[1]][0], vertices[face[1]][1], vertices[face[1]][2]);
            var v2 = vec3(vertices[face[2]][0], vertices[face[2]][1], vertices[face[2]][2]);
            var normal1 = normalize(cross(subtract(v1, v0), subtract(v2, v0)));
            
            var color1 = (normal1[1] > 0) 
                ? vec4(0.25, 0.25, 0.4, 1.0)  // 朝上
                : vec4(0.125, 0.125, 0.2, 1.0); // 朝下

            for (var j = 0; j < 3; j++) {
                var v = vertices[face[j]];
                update(v[0], v[1], v[2]);
                points.push(vec4(v[0], v[1], v[2], 1.0));
                colors.push(color1); // 三个顶点共享同一颜色
            }

            // 第二个三角形 [0,2,3]
            var v0b = vec3(vertices[face[0]][0], vertices[face[0]][1], vertices[face[0]][2]);
            var v2b = vec3(vertices[face[2]][0], vertices[face[2]][1], vertices[face[2]][2]);
            var v3b = vec3(vertices[face[3]][0], vertices[face[3]][1], vertices[face[3]][2]);
            var normal2 = normalize(cross(subtract(v2b, v0b), subtract(v3b, v0b)));
            
            var color2 = (normal2[1] > 0) 
                ? vec4(0.25, 0.25, 0.4, 1.0) 
                : vec4(0.125, 0.125, 0.2, 1.0);

            var indices = [0, 2, 3];
            for (var j = 0; j < 3; j++) {
                var v = vertices[face[indices[j]]];
                update(v[0], v[1], v[2]);
                points.push(vec4(v[0], v[1], v[2], 1.0));
                colors.push(color2);
            }
        }
    }
}
function loadOBJFile(){
   fetch(filename)
        .then(response => response.text())
        .then(objText => {
            alert('本模型未添加贴纸: ' + filename);
            loadOBJ(objText);
            SendData();
            render();
        })
        .catch(error => {
            console.error('加载OBJ文件失败:', error);
            alert('无法加载模型文件: ' + filename);
        });
}

