# Data Lake

A data lake is a storage repository that holds a large amount of data in its native, raw format. Data lake stores are optimized for scaling to terabytes and petabytes of data. The data typically comes from multiple heterogeneous sources, and may be structured, semi-structured, or unstructured. The idea with a data lake is to store everything in its original, untransformed state. This approach differs from a traditional data warehouse, which transforms and processes the data at the time of ingestion.

![lake](lake.jpg)

__Advantages of a data lake:__

Data is never thrown away, because the data is stored in its raw format. This is especially useful in a big data environment, when you may not know in advance what insights are available from the data.
Users can explore the data and create their own queries.
May be faster than traditional ETL tools.
More flexible than a data warehouse, because it can store unstructured and semi-structured data.

![comparison](LakeVsWarehouse.png)


__Challenges__
- Lack of a schema or descriptive metadata can make the data hard to consume or query.
- Lack of semantic consistency across the data can make it challenging to perform analysis on the data, unless users are highly skilled at data analytics.
- It can be hard to guarantee the quality of the data going into the data lake.
- Without proper governance, access control and privacy issues can be problems. What information is going into the data lake, who can access that data, and for what uses?
- A data lake may not be the best way to integrate data that is already relational.
- By itself, a data lake does not provide integrated or holistic views across the organization.
- A data lake may become a dumping ground for data that is never actually analyzed or mined for insights.

__Azure__

Build data lake solutions using the following services offered by Azure:

![solutin](LakeSolu.png)

- Azure HD Insight is a managed, full-spectrum, open-source analytics service in the cloud for enterprises.
- Azure Data Lake Store is a hyperscale, Hadoop-compatible repository.
- Azure Data Lake Analytics is an on-demand analytics job service to simplify big data analytics.