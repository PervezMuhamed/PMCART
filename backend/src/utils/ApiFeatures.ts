class APIFeatures {
    public query;
    public queryStr;
    constructor(query:any, queryStr:any){
        this.query=query;
        this.queryStr=queryStr;
    }

    search(){
        let keyword=this.queryStr.keyword ? {
            productName:{
                $regex: this.queryStr.keyword,
                $options:'i'
            }

        }:{};

        this.query.find({...keyword})
        return this;
    }
    filter(){
        const queryStrCopy= {...this.queryStr};
        
        //before
        console.log(queryStrCopy);

        //removing fields from query

        const removingFields=["keyword",'page','sort','limit','fields'];
        removingFields.forEach(field=>{delete queryStrCopy[field]});

        let queryStr = JSON.stringify(queryStrCopy);
        queryStr = queryStr.replace(/\b(lt|lte|gt|gte)/g, match=>`$${match}`);
        console.log(queryStr);

        //after
        console.log(queryStrCopy);

        this.query.find(JSON.parse(queryStr));
        return this;
    }

    sort(){
        if(this.queryStr.sort){
            const sortBy = this.queryStr.sort.split(',').join(" ");
            this.query.sort(sortBy);
        } else{
            this.query.sort('-createdAt');
        }
        return this;
    }
    
    limitFields() {
        if(this.queryStr.fields){
            const fields = this.queryStr.fields.split(',').join(" ");
            this.query.select(fields);
        }else {
            this.query.select('-__v');
        }
        return this;
    }

    pagination(resPerPage){
        const currentPage =  Number(this.queryStr.page)||1;
        const skip = resPerPage * (currentPage-1);
        this.query.skip(skip).limit(resPerPage);
        return this;
    }
}

export default APIFeatures;