"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1574],{15680:(e,i,a)=>{a.d(i,{xA:()=>u,yg:()=>f});var n=a(96540);function o(e,i,a){return i in e?Object.defineProperty(e,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[i]=a,e}function s(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?s(Object(a),!0).forEach((function(i){o(e,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(a,i))}))}return e}function r(e,i){if(null==e)return{};var a,n,o=function(e,i){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],i.indexOf(a)>=0||(o[a]=e[a]);return o}(e,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var t=n.createContext({}),l=function(e){var i=n.useContext(t),a=i;return e&&(a="function"==typeof e?e(i):c(c({},i),e)),a},u=function(e){var i=l(e.components);return n.createElement(t.Provider,{value:i},e.children)},_="mdxType",d={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},p=n.forwardRef((function(e,i){var a=e.components,o=e.mdxType,s=e.originalType,t=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),_=l(a),p=o,f=_["".concat(t,".").concat(p)]||_[p]||d[p]||s;return a?n.createElement(f,c(c({ref:i},u),{},{components:a})):n.createElement(f,c({ref:i},u))}));function f(e,i){var a=arguments,o=i&&i.mdxType;if("string"==typeof e||o){var s=a.length,c=new Array(s);c[0]=p;var r={};for(var t in i)hasOwnProperty.call(i,t)&&(r[t]=i[t]);r.originalType=e,r[_]="string"==typeof e?e:o,c[1]=r;for(var l=2;l<s;l++)c[l]=a[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4375:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>u,contentTitle:()=>t,default:()=>f,frontMatter:()=>r,metadata:()=>l,toc:()=>_});var n=a(58168),o=a(98587),s=(a(96540),a(15680)),c=["components"],r={title:"rucio-replica-recoverer"},t=void 0,l={unversionedId:"bin/rucio-replica-recoverer",id:"bin/rucio-replica-recoverer",title:"rucio-replica-recoverer",description:"",source:"@site/../docs/bin/rucio-replica-recoverer.md",sourceDirName:"bin",slug:"/bin/rucio-replica-recoverer",permalink:"/documentation/bin/rucio-replica-recoverer",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-replica-recoverer.md",tags:[],version:"current",frontMatter:{title:"rucio-replica-recoverer"},sidebar:"docs",previous:{title:"rucio-reaper",permalink:"/documentation/bin/rucio-reaper"},next:{title:"rucio-rse-decommissioner",permalink:"/documentation/bin/rucio-rse-decommissioner"}},u={},_=[],d={toc:_},p="wrapper";function f(e){var i=e.components,a=(0,o.A)(e,c);return(0,s.yg)(p,(0,n.A)({},d,a,{components:i,mdxType:"MDXLayout"}),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre"},"usage: rucio-replica-recoverer [-h] [--nattempts NATTEMPTS]\n                               [--younger-than YOUNGER_THAN]\n                               [--vos VOS [VOS ...]] [--run-once]\n                               [--limit-suspicious-files-on-rse LIMIT_SUSPICIOUS_FILES_ON_RSE]\n                               [--json-file-name JSON_FILE_NAME]\n                               [--sleep-time SLEEP_TIME] [--active-mode]\n\nReplica-Recoverer is a daemon that declares suspicious replicas\nthat are available on other RSE as bad. Consequently, automatic\nreplica recovery is triggered via necromancer daemon,\nwhich creates a rule for such bad replicas.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --nattempts NATTEMPTS\n                        Minimum count of suspicious file replica appearance in\n                        bad_replicas table. Default value is 5.\n  --younger-than YOUNGER_THAN\n                        Consider all file replicas logged in bad_replicas\n                        table since specified number of younger-than days.\n                        Default value is 5.\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --run-once            One iteration only.\n  --limit-suspicious-files-on-rse LIMIT_SUSPICIOUS_FILES_ON_RSE\n                        Maximum number of suspicious replicas on an RSE before\n                        that RSE is considered problematic and the suspicious\n                        replicas on that RSE are declared\n                        \"TEMPORARY_UNAVAILABLE\". Default value is 5.\n  --json-file-name JSON_FILE_NAME\n                        Name of the json file that that contains the policies\n                        which will be used by the suspicious replica\n                        recoverer.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: Thread sleep time after each\n                        chunk of work.\n  --active-mode         If NOT specified, the daemon will run without taking\n                        any actions on any files. In either case, the log file\n                        will be produced normally.\n\nPreparing RSEs and DIDs for testing this daemon from rucio docker:\n-------------------------------------------------------------------\n\n$ sudo docker exec -it dev_rucio_1 /bin/bash\n\nAdding the RSEs to rucio DB:\n\n$ rucio-admin rse add MOCK_SUSPICIOUS\n$ rucio-admin rse set-attribute --rse MOCK_SUSPICIOUS --key backend_type --value file\n$ rucio-admin rse set-attribute --rse MOCK_SUSPICIOUS --key storage_usage_tool --value 'rucio.rse.protocols.posix.Default.getSpace'\n$ rucio-admin rse add-protocol --hostname localhost --scheme file --prefix '/tmp/rucio_rse1/' --space-token 'ATLASDATADISK1' --web-service-path '/srm/managerv2?SFN=' --domain-json '{ \"lan\": { \"read\": 1, \"write\": 1, \"delete\": 1 }, \"wan\": { \"read\": 1, \"write\": 1, \"delete\": 1}}' --impl 'rucio.rse.protocols.posix.Default'  MOCK_SUSPICIOUS\n$ rucio-admin rse info MOCK_SUSPICIOUS\n\n$ rucio-admin rse add MOCK_RECOVERY\n$ rucio-admin rse set-attribute --rse MOCK_RECOVERY --key backend_type --value POSIX\n$ rucio-admin rse set-attribute --rse MOCK_RECOVERY --key storage_usage_tool --value 'rucio.rse.protocols.posix.Default.getSpace'\n$ rucio-admin rse add-protocol --hostname localhost --scheme file --prefix '/tmp/rucio_rse2/' --space-token 'ATLASDATADISK2' --web-service-path '/srm/managerv2?SFN=' --domain-json '{ \"lan\": { \"read\": 1, \"write\": 1, \"delete\": 1 }, \"wan\": { \"read\": 1, \"write\": 1, \"delete\": 1}}' --impl 'rucio.rse.protocols.posix.Default'  MOCK_RECOVERY\n$ rucio-admin rse info MOCK_RECOVERY\n\nFor testing, we create the following files:\n-------------------------------------------------------------------\n\nName                                  MOCK_RECOVERY       MOCK_SUSPICIOUS    BAD (on MOCK_SUSPICIOUS)    SUSPICIOUS (on MOCK_SUSPICIOUS)\nfile_available_suspicious             yes                 yes                no                          yes\nfile_available_suspicious_and_bad     yes                 yes                yes                         yes\nfile_notavailable_suspicious          unavailable         yes                no                          yes\n\nOnly file_available_suspicious should be the one on which the daemon takes action and declares it as bad.\n\n$ id0=`uuidgen`\n$ id1=`uuidgen`\n$ id2=`uuidgen`\n$ id3=`uuidgen`\n$ echo \"file available on MOCK_RECOVERY and declared suspicious on MOCK_SUSPICIOUS  (11 times)\" > /tmp/file_available_suspicious'_'$id1\n$ echo \"file available on MOCK_RECOVERY and declared suspicious on MOCK_SUSPICIOUS  (11 times) and 1 time bad/deleted/lost on MOCK_SUSPICIOUS\" > /tmp/file_available_suspicious_and_bad'_'$id2\n$ echo \"file declared as unavailable on MOCK_RECOVERY and declared as suspicious 11 times on MOCK_SUSPICIOUS\" > /tmp/file_notavailable_suspicious'_'$id3\n\nUploading the files created above to rucio:\n-------------------------------------------------------------------\n\nrucio add-dataset mock:dataset_of_suspicious_replicas'_'$id0\n\nAdded mock:dataset_of_suspicious_replicas_2ba45524-860b-43f9-a601-6ccec2c46778\n\n$ rucio add-rule mock:dataset_of_suspicious_replicas'_'$id0 1 MOCK_SUSPICIOUS\n$ rucio add-rule --source-replica-expression MOCK_SUSPICIOUS mock:dataset_of_suspicious_replicas'_'$id0 1 MOCK_RECOVERY\n$ rucio list-rules mock:dataset_of_suspicious_replicas'_'$id0\n\nID                                ACCOUNT    SCOPE:NAME                                                                STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n--------------------------------  ---------  ------------------------------------------------------------------------  ----------------------  ----------------  --------  ---------------  -------------------\n2a1a078b66ca4e209cc20a5826125334  root       mock:dataset_of_suspicious_replicas_2ba45524-860b-43f9-a601-6ccec2c46778  OK[0/0/0]               MOCK_RECOVERY            1                   2019-02-19 14:12:30\n8c15d2f8e94a459a86a488055a10d068  root       mock:dataset_of_suspicious_replicas_2ba45524-860b-43f9-a601-6ccec2c46778  OK[0/0/0]               MOCK_SUSPICIOUS          1                   2019-02-19 14:12:28\n\n$ rucio upload --scope mock --rse MOCK_SUSPICIOUS --name file_available_suspicious'_'$id1 /tmp/file_available_suspicious'_'$id1\n$ rucio upload --scope mock --rse MOCK_SUSPICIOUS --name file_available_suspicious_and_bad'_'$id2 /tmp/file_available_suspicious_and_bad'_'$id2\n$ rucio upload --scope mock --rse MOCK_SUSPICIOUS --name file_notavailable_suspicious'_'$id3 /tmp/file_notavailable_suspicious'_'$id3\n$ rucio upload --scope mock --rse MOCK_RECOVERY --name file_available_suspicious'_'$id1 /tmp/file_available_suspicious'_'$id1\n$ rucio upload --scope mock --rse MOCK_RECOVERY --name file_available_suspicious_and_bad'_'$id2 /tmp/file_available_suspicious_and_bad'_'$id2\n$ rucio upload --scope mock --rse MOCK_RECOVERY --name file_notavailable_suspicious'_'$id3 /tmp/file_notavailable_suspicious'_'$id3\n[...]\n$ rucio attach mock:dataset_of_suspicious_replicas'_'$id0 mock:file_available_suspicious'_'$id1\n$ rucio attach mock:dataset_of_suspicious_replicas'_'$id0 mock:file_available_suspicious_and_bad'_'$id2\n$ rucio attach mock:dataset_of_suspicious_replicas'_'$id0 mock:file_notavailable_suspicious'_'$id3\n[...]\n\n$ rucio list-file-replicas mock:file_available_suspicious'_'$id1\n+---------+----------------------------------------------------------------+------------+-----------+------------------------------------------------------------------------------------------------------------------------------+\n| SCOPE   | NAME                                                           | FILESIZE   | ADLER32   | RSE: REPLICA                                                                                                                 |\n|---------+----------------------------------------------------------------+------------+-----------+------------------------------------------------------------------------------------------------------------------------------|\n| mock    | file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e | 87.000 B   | 206b1c91  | MOCK_SUSPICIOUS: file://localhost:0/tmp/rucio_rse1/mock/1f/6b/file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e |\n| mock    | file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e | 87.000 B   | 206b1c91  | MOCK_RECOVERY: file://localhost:0/tmp/rucio_rse2/mock/1f/6b/file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e   |\n+---------+----------------------------------------------------------------+------------+-----------+------------------------------------------------------------------------------------------------------------------------------+\n\n$ rucio list-file-replicas mock:file_available_suspicious_and_bad'_'$id2\n+---------+------------------------------------------------------------------------+------------+-----------+--------------------------------------------------------------------------------------------------------------------------------------+\n| SCOPE   | NAME                                                                   | FILESIZE   | ADLER32   | RSE: REPLICA                                                                                                                         |\n|---------+------------------------------------------------------------------------+------------+-----------+--------------------------------------------------------------------------------------------------------------------------------------|\n| mock    | file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835 | 134.000 B  | dfdf2bff  | MOCK_SUSPICIOUS: file://localhost:0/tmp/rucio_rse1/mock/1d/2d/file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835 |\n| mock    | file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835 | 134.000 B  | dfdf2bff  | MOCK_RECOVERY: file://localhost:0/tmp/rucio_rse2/mock/1d/2d/file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835   |\n+---------+------------------------------------------------------------------------+------------+-----------+--------------------------------------------------------------------------------------------------------------------------------------+\n\n$ rucio list-file-replicas mock:file_notavailable_suspicious'_'$id3\n+---------+-------------------------------------------------------------------+------------+-----------+---------------------------------------------------------------------------------------------------------------------------------+\n| SCOPE   | NAME                                                              | FILESIZE   | ADLER32   | RSE: REPLICA                                                                                                                    |\n|---------+-------------------------------------------------------------------+------------+-----------+---------------------------------------------------------------------------------------------------------------------------------|\n| mock    | file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f | 101.000 B  | 0c14223f  | MOCK_SUSPICIOUS: file://localhost:0/tmp/rucio_rse1/mock/7d/a6/file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f |\n| mock    | file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f | 101.000 B  | 0c14223f  | MOCK_RECOVERY: file://localhost:0/tmp/rucio_rse2/mock/7d/a6/file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f   |\n+---------+-------------------------------------------------------------------+------------+-----------+---------------------------------------------------------------------------------------------------------------------------------+\n\nModifying the file statuses in the DB:\n--------------------------------------\n\n$ python\n\n# the paths below point to MOCK_SUSPICIOUS RSE (.../rucio_rse1)\n\n$$ file1 = ['file://localhost:0/tmp/rucio_rse1/mock/1f/6b/file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e',]\n$$ file2 = ['file://localhost:0/tmp/rucio_rse1/mock/1d/2d/file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835',]\n$$ file3 = ['file://localhost:0/tmp/rucio_rse1/mock/7d/a6/file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f' ]\n\n$$ from rucio.client.replicaclient import ReplicaClient\n$$ replica_client = ReplicaClient()\n$$ import time\n$$ for i in range(11):\n       replica_client.declare_suspicious_file_replicas(file1, 'This is a good reason')\n       replica_client.declare_suspicious_file_replicas(file2, 'This is a good reason')\n       replica_client.declare_suspicious_file_replicas(file3, 'This is a good reason')\n       time.sleep(1)\n\n#  Declaring file2 bad on MOCK_SUSPICIOUS:\n   ---------------------------------------\n\n$$ replica_client.declare_bad_file_replicas(file2, 'This is a good reason')\n\n#  Update replica state of 'file_notavailable_suspicious'_'$id1' on MOCK_RECOVERY to 'UNAVAILABLE'\n#  (change the file name below according to the info from rucio !):\n   -----------------------------------------------------------------------------------------------\n\n$$ replica_client.update_replicas_states('MOCK_RECOVERY', [{'scope':'mock', 'name':'file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f', 'state':'U'}])\n\n# Checking the results of the file status changes:\n  ------------------------------------------------\n$$ from rucio.core.replica import get_suspicious_files\n$$ from datetime import datetime, timedelta\n$$ from_date = datetime.now() - timedelta(days=3)\n$$ from rucio.core.replica import list_bad_replicas_status\n\n$$ get_suspicious_files('MOCK_SUSPICIOUS',from_date,10)\n\n[{'created_at': datetime.datetime(2019, 2, 19, 14, 12, 56), 'scope': 'mock', 'cnt': 11L, 'name': 'file_notavailable_suspicious_6157f589-80db-492c-acdd-ef5f0c45112f', 'rse': 'MOCK_SUSPICIOUS'},\n {'created_at': datetime.datetime(2019, 2, 19, 14, 12, 48), 'scope': 'mock', 'cnt': 11L, 'name': 'file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e', 'rse': 'MOCK_SUSPICIOUS'}]\n\n$$ list_bad_replicas_status(rse='MOCK_SUSPICIOUS', younger_than=from_date)\n\n[{'name': 'file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835', 'rse': 'MOCK_SUSPICIOUS', 'created_at': datetime.datetime(2019, 2, 19, 14, 18, 33), 'updated_at': datetime.datetime(2019, 2, 19, 14, 18, 33), 'state': BAD, 'scope': 'mock'}]\n\n$$ exit()\n\nRun the daemon:\n---------------\n\n  $ python bin/rucio-replica-recoverer --run-once --rse-expression='MOCK_SUSPICIOUS'\n\nTerminal output:\n----------------\n\n2019-02-19 14:39:24,114 709 INFO  replica_recoverer[0/0]: ready to query replicas at RSEs like *MOCK*, declared as suspicious in the last 3 days at least 10 times and which are available on other RSEs.\n2019-02-19 14:39:24,124 709 INFO  replica_recoverer[0/0]: suspicious replica query took 0.0101511478424 seconds, total of 1 replicas were found. [{'scope': 'mock', 'cnt': 11L, 'name': 'file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e', 'rse': 'MOCK_SUSPICIOUS'}]\n2019-02-19 14:39:24,125 709 INFO  replica_recoverer[0/0]: looking for replica surls.\n2019-02-19 14:39:24,160 709 INFO  replica_recoverer[0/0]: found 1/1 surls (took 0.035572052002 seconds) - declaring them as bad replicas now.\n2019-02-19 14:39:24,160 709 INFO  replica_recoverer[0/0]: ready to declare 1 bad replica(s) on MOCK_SUSPICIOUS: ['file://localhost:0/tmp/rucio_rse1/mock/1f/6b/file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e'].\n2019-02-19 14:39:24,188 709 INFO  replica_recoverer[0/0]: finished declaring bad replicas on MOCK_SUSPICIOUS.\n2019-02-19 14:39:24,192 709 INFO  replica_recoverer[0/0]: graceful stop done\n\n# Checking the results of the file status changes:\n  ------------------------------------------------\n$ python\n\n$$ from rucio.core.replica import get_suspicious_files\n$$ from datetime import datetime, timedelta\n$$ from_date = datetime.now() - timedelta(days=3)\n$$ from rucio.core.replica import list_bad_replicas_status\n$$ from rucio.common.constants import SuspiciousAvailability\n\n$$ get_suspicious_files('MOCK_SUSPICIOUS',younger_than=from_date, nattempts=10, is_suspicious=True, available_elsewhere=SuspiciousAvailability[\"EXIST_COPIES\"].value)\n\n>>> get_suspicious_files('MOCK_SUSPICIOUS',younger_than=from_date, nattempts=10, is_suspicious=True, available_elsewhere=SuspiciousAvailability[\"EXIST_COPIES\"].value)\n[]\n\n$$ list_bad_replicas_status(rse='MOCK_SUSPICIOUS', younger_than=from_date)\n\n[{'name': 'file_available_suspicious_5180be3e-4ebc-4c34-b528-efbfd09f067e', 'rse': 'MOCK_SUSPICIOUS', 'created_at': datetime.datetime(2019, 2, 19, 14, 39, 24), 'updated_at': datetime.datetime(2019, 2, 19, 14, 39, 24), 'state': BAD, 'scope': 'mock'},\n {'name': 'file_available_suspicious_and_bad_46964411-95d4-46c4-a973-72c045195835', 'rse': 'MOCK_SUSPICIOUS', 'created_at': datetime.datetime(2019, 2, 19, 14, 18, 33), 'updated_at': datetime.datetime(2019, 2, 19, 14, 18, 33), 'state': BAD, 'scope': 'mock'}]\n\n$$ exit()\n\nWhen run in multi-VO mode, by default the daemon will run on RSEs from all VOs::\n\n  $ rucio-replica-recoverer --run-once\n  2020-07-28 15:15:14,151 5461    INFO    replica_recoverer: This instance will work on VOs: def, abc, xyz, 123\n\nBy using the ``--vos`` argument only the VO or VOs specified will be affected::\n\n  $ rucio-replica-recoverer --run-once --vos abc xyz\n  2020-07-28 15:16:36,066 5474    INFO    replica_recoverer: This instance will work on VOs: abc, xyz\n\nNote that attempting the use the ``--vos`` argument when in single-VO mode will have no affect::\n\n  $ rucio-replica-recoverer --run-once --vos abc xyz\n  2020-07-28 15:21:33,349 5488    WARNING Ignoring argument vos, this is only applicable in a multi-VO setup.\n")))}f.isMDXComponent=!0}}]);