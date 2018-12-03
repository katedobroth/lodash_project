const _ = {
    clamp: function (number, lowerBound, upperBound) {
        if (number < lowerBound) {
            return (Math.max(number, lowerBound));
        }
        else if (number > upperBound) {
            return (Math.min(number, upperBound));
        }
        else return number;
    },
    inRange: function (number, start, end) {
        if (!end) {
            end = arguments[1];
            start = 0;
        }
        if (start > end) {
            tmp = start;
            start = end;
            end = tmp;
        }
        return ((start < number) && (number < end));
    },
    words: function (str) {
        return str.split(' ');
    },
    pad: function(str,length) {
        if (str.length > length) return str;
        else {
            const left_spaces = Math.floor((length - str.length) / 2);
            const right_spaces = length - str.length - left_spaces;
            const n_spaces = length - str.length;
            return (' '.repeat(left_spaces) + str + ' '.repeat(right_spaces));
        }
    },
    has: function(obj,key) {
        return (obj[key] !== undefined);
        },

    invert: function(obj) {
        const newObj = {};
        const keys = Object.keys(obj);
        for (const key of keys) {
            newObj[obj[key]] = key;
        }
        return newObj;
    },

    findKey: function(obj,pred) {
        for (let item in obj) {
            let predicateReturnValue = pred(obj[item]);
            if (predicateReturnValue) return item;
        }
        return undefined;
    },
    drop: function(arr,n) {
        if (n) return arr.slice(n);
        else return arr.slice(1);
    },
    dropWhile: function(arr,pred) {
        const dropNumber = arr.findIndex(function (element, index) {
           return ! (pred(element, index, arr));
        });
        return this.drop(arr,dropNumber);

    },
    chunk: function(arr,size) {
        const n_chunks = Math.ceil(arr.length/size);
        const chunks = [[],[]];
        for (let chunk = 0; chunk < n_chunks; chunk++) {
            let i=0;
            while ((i < size) && ((chunk*size)+i) < arr.length) {

                //lazy initialization
                if (!chunks[chunk]) chunks[chunk] = [];

                chunks[chunk][i] = arr[(chunk*size)+i];
                i++;
            }
        }
        return chunks;
    }
};


module.exports = _;