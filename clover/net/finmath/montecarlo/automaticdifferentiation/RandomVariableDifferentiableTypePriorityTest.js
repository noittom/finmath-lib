var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":138,"id":42298,"methods":[{"el":35,"sc":2,"sl":27},{"el":43,"sc":2,"sl":40},{"el":68,"sc":2,"sl":45},{"el":91,"sc":2,"sl":70},{"el":114,"sc":2,"sl":93},{"el":137,"sc":2,"sl":116}],"name":"RandomVariableDifferentiableTypePriorityTest","sl":24}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_144":{"methods":[{"sl":70}],"name":"testTypePriorityMult[3]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90}]},"test_186":{"methods":[{"sl":93}],"name":"testTypePriorityCap[0]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":113}]},"test_245":{"methods":[{"sl":116}],"name":"testTypePriorityFloor[1]","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":122},{"sl":128},{"sl":129},{"sl":130},{"sl":132},{"sl":133},{"sl":134},{"sl":136}]},"test_257":{"methods":[{"sl":45}],"name":"testTypePriorityAdd[1]","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":51},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":67}]},"test_269":{"methods":[{"sl":116}],"name":"testTypePriorityFloor[3]","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":122},{"sl":128},{"sl":129},{"sl":130},{"sl":132},{"sl":133},{"sl":134},{"sl":136}]},"test_273":{"methods":[{"sl":70}],"name":"testTypePriorityMult[0]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90}]},"test_340":{"methods":[{"sl":70}],"name":"testTypePriorityMult[2]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90}]},"test_484":{"methods":[{"sl":116}],"name":"testTypePriorityFloor[0]","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":122},{"sl":128},{"sl":129},{"sl":130},{"sl":132},{"sl":133},{"sl":134},{"sl":136}]},"test_485":{"methods":[{"sl":93}],"name":"testTypePriorityCap[3]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":113}]},"test_510":{"methods":[{"sl":45}],"name":"testTypePriorityAdd[0]","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":51},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":67}]},"test_521":{"methods":[{"sl":70}],"name":"testTypePriorityMult[1]","pass":true,"statements":[{"sl":73},{"sl":74},{"sl":76},{"sl":82},{"sl":83},{"sl":84},{"sl":86},{"sl":87},{"sl":88},{"sl":90}]},"test_56":{"methods":[{"sl":93}],"name":"testTypePriorityCap[2]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":113}]},"test_597":{"methods":[{"sl":45}],"name":"testTypePriorityAdd[3]","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":51},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":67}]},"test_624":{"methods":[{"sl":45}],"name":"testTypePriorityAdd[2]","pass":true,"statements":[{"sl":48},{"sl":49},{"sl":51},{"sl":57},{"sl":58},{"sl":59},{"sl":61},{"sl":62},{"sl":63},{"sl":65},{"sl":67}]},"test_84":{"methods":[{"sl":93}],"name":"testTypePriorityCap[1]","pass":true,"statements":[{"sl":96},{"sl":97},{"sl":99},{"sl":105},{"sl":106},{"sl":107},{"sl":109},{"sl":110},{"sl":111},{"sl":113}]},"test_93":{"methods":[{"sl":116}],"name":"testTypePriorityFloor[2]","pass":true,"statements":[{"sl":119},{"sl":120},{"sl":122},{"sl":128},{"sl":129},{"sl":130},{"sl":132},{"sl":133},{"sl":134},{"sl":136}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [257, 597, 510, 624], [], [], [257, 597, 510, 624], [257, 597, 510, 624], [], [257, 597, 510, 624], [], [], [], [], [], [257, 597, 510, 624], [257, 597, 510, 624], [257, 597, 510, 624], [], [257, 597, 510, 624], [257, 597, 510, 624], [257, 597, 510, 624], [], [257, 597, 510, 624], [], [257, 597, 510, 624], [], [], [521, 273, 144, 340], [], [], [521, 273, 144, 340], [521, 273, 144, 340], [], [521, 273, 144, 340], [], [], [], [], [], [521, 273, 144, 340], [521, 273, 144, 340], [521, 273, 144, 340], [], [521, 273, 144, 340], [521, 273, 144, 340], [521, 273, 144, 340], [], [521, 273, 144, 340], [], [], [186, 485, 56, 84], [], [], [186, 485, 56, 84], [186, 485, 56, 84], [], [186, 485, 56, 84], [], [], [], [], [], [186, 485, 56, 84], [186, 485, 56, 84], [186, 485, 56, 84], [], [186, 485, 56, 84], [186, 485, 56, 84], [186, 485, 56, 84], [], [186, 485, 56, 84], [], [], [269, 484, 245, 93], [], [], [269, 484, 245, 93], [269, 484, 245, 93], [], [269, 484, 245, 93], [], [], [], [], [], [269, 484, 245, 93], [269, 484, 245, 93], [269, 484, 245, 93], [], [269, 484, 245, 93], [269, 484, 245, 93], [269, 484, 245, 93], [], [269, 484, 245, 93], [], []]