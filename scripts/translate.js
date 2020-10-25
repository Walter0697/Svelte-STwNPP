export function translate(sentence, type)
{
    if (type == 1)
    {
        return turnsRtoW(sentence);
    }
    else if (type == 2)
    {
        return spongebob(sentence);
    }
    else if (type == 3)
    {
        return reverseString(sentence);
    }
    else if (type == 4)
    {
        return camelCase(sentence);
    }
    else if (type == 5)
    {
        return political(sentence);
    }
    return sentence;
}

function political(sentence)
{
    return sentence.replace(/black/g, 'rejected')
                    .replace(/white/g, 'allowed')
                    .replace(/master/g, 'main')
                    .replace(/china/g, 'COVID')
                    .replace(/chinese/g, 'COVID')
                    .replace(/fuck/g, 'xxxx')
                    .replace(/shit/g, 'xxxx')
}

function camelCase(sentence)
{
    var arr = sentence.split(" ");
    var outputarr = [];
    outputarr.push(arr[0].toLowerCase());
    for (var i = 1; i < arr.length; i++)
    {
        var temp = arr[i];
        outputarr.push(temp.replace(temp.charAt(0), temp.charAt(0).toUpperCase()));
    }
    return outputarr.join("");
}

function reverseString(sentence)
{
    return sentence.split('').reverse().join('');
}

function turnsRtoW(sentence)
{
    return sentence.replace(/r/g, "w").replace(/R/g, "W");
}

function spongebob(sentence)
{
    var arr = sentence.split(" ");
    var outputarr = [];
    for (var i = 0; i < arr.length; i++)
    {
        var converted = mocking(arr[i], i);
        outputarr.push(converted);
    }
    var final = outputarr.join(" ");
    return final.replace(/I/g, "i").replace(/l/g, "L");
}

function mocking(word, seed) 
{
    var starter = word.toLowerCase();
    var allUp = word.toUpperCase();
    var camel = starter.replace(starter.charAt(0), starter.charAt(0).toUpperCase());

    var all_lower = starter;
    var current = 0;
    var high = ((seed * all_lower.length) % 2 == 1);
    while (current < all_lower.length)
    {
        var ascii = all_lower.charCodeAt(current) * seed;
        var range = ascii % 2 + 1;
        all_lower = convertTo(all_lower, current, range, high);

        current += range;
        high = !high;
    }

    //if it doesn't change, and it is longer than 3 letter, then change it again with different seed
    if (all_lower.length >= 3 && (starter == all_lower || camel == all_lower || allUp == all_lower)) return mocking(word, seed + 1);

    //charCodeAt(0)
    return all_lower;
}

function convertTo(sentence, start, range, high = true)
{
    var origin = sentence.substring(start, start + range);
    var replacing = origin;
    if (high)
    {
        replacing = origin.toUpperCase();
    }
    else
    {
        replacing = origin.toLowerCase();
    }
    return sentence.replace(origin, replacing);
}