from django.shortcuts import render

# Create your views here.

def home(request):

    if request.method == 'POST':
    
        data = str(request.POST.get('num1'))
        data1 = str(request.POST.get('num2'))
        value = 0
        value1 = 0
        value2 = 0
        r = 1
        rev = 0
        k = 0
        j = 0
        result = 0

        for char in data:
            value += ord(char)

        for char1 in data1:
            value1 += ord(char1)

        r = value % 10
        last = r

        while(value!=0):
            r = value%10
            rev = rev+r
            k += r
            value = value/10

        p = value1%10
        late = p

        while(value1!=0):
            p = value1%10
            rev = rev+p
            j += p
            value1 = value1/10

            
        sum = last+k+j+late+33
        result = int(sum)

        return render(request, 'index.html', {'result':result, 'data':data, 'data1':data1})

    else:
        return render(request, "index.html")
    
def calculator(request):
    return render(request,'calculator.html')


