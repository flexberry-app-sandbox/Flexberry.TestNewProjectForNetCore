//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.TestNewProjectForNetCore
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// C2.
    /// </summary>
    // *** Start programmer edit section *** (C2 CustomAttributes)

    // *** End programmer edit section *** (C2 CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("C2E", new string[] {
            "name as \'Name\'",
            "C1 as \'C1\'",
            "C1.name as \'Name\'"}, Hidden=new string[] {
            "C1.name"})]
    [MasterViewDefineAttribute("C2E", "C1", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "name")]
    [View("C2L", new string[] {
            "name as \'Name\'",
            "C1.name as \'Name\'"})]
    public class C2 : ICSSoft.STORMNET.DataObject
    {
        
        private string fname;
        
        private IIS.TestNewProjectForNetCore.C1 fC1;
        
        // *** Start programmer edit section *** (C2 CustomMembers)

        // *** End programmer edit section *** (C2 CustomMembers)

        
        /// <summary>
        /// name.
        /// </summary>
        // *** Start programmer edit section *** (C2.name CustomAttributes)

        // *** End programmer edit section *** (C2.name CustomAttributes)
        [StrLen(255)]
        public virtual string name
        {
            get
            {
                // *** Start programmer edit section *** (C2.name Get start)

                // *** End programmer edit section *** (C2.name Get start)
                string result = this.fname;
                // *** Start programmer edit section *** (C2.name Get end)

                // *** End programmer edit section *** (C2.name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (C2.name Set start)

                // *** End programmer edit section *** (C2.name Set start)
                this.fname = value;
                // *** Start programmer edit section *** (C2.name Set end)

                // *** End programmer edit section *** (C2.name Set end)
            }
        }
        
        /// <summary>
        /// C2.
        /// </summary>
        // *** Start programmer edit section *** (C2.C1 CustomAttributes)

        // *** End programmer edit section *** (C2.C1 CustomAttributes)
        [NotNull()]
        public virtual IIS.TestNewProjectForNetCore.C1 C1
        {
            get
            {
                // *** Start programmer edit section *** (C2.C1 Get start)

                // *** End programmer edit section *** (C2.C1 Get start)
                IIS.TestNewProjectForNetCore.C1 result = this.fC1;
                // *** Start programmer edit section *** (C2.C1 Get end)

                // *** End programmer edit section *** (C2.C1 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (C2.C1 Set start)

                // *** End programmer edit section *** (C2.C1 Set start)
                this.fC1 = value;
                // *** Start programmer edit section *** (C2.C1 Set end)

                // *** End programmer edit section *** (C2.C1 Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "C2E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View C2E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("C2E", typeof(IIS.TestNewProjectForNetCore.C2));
                }
            }
            
            /// <summary>
            /// "C2L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View C2L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("C2L", typeof(IIS.TestNewProjectForNetCore.C2));
                }
            }
        }
    }
}
