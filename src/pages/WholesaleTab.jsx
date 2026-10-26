import React from 'react';
import { Store, CheckCircle2, XCircle, Clock, Mail, Phone, MapPin, Building, Trash2 } from 'lucide-react';

export const WholesaleTab = ({
  wholesaleApps,
  bulkEnquiries,
  onUpdateAppStatus,
  onDeleteApp,
  onDeleteEnquiry,
  onClearAllWholesale
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-2xl font-bold text-[#332822]">
            Wholesale B2B & Retail Partner Desk
          </h3>
          <p className="text-xs text-[#6F5145]">
            Vet stockist applications, assign wholesale pricing tiers (Silver/Gold/Platinum), and process bulk event requests
          </p>
        </div>

        {(wholesaleApps.length > 0 || bulkEnquiries.length > 0) && onClearAllWholesale && (
          <button
            onClick={onClearAllWholesale}
            className="px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-xl font-bold transition-all shrink-0 inline-flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Wholesale Data</span>
          </button>
        )}
      </div>

      {/* Section 1: Partner Applications */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-editorial text-lg font-bold text-[#332822]">
            Storefront Partner Applications ({wholesaleApps.length})
          </h4>
          <span className="text-xs font-bold text-[#B96F58]">
            {wholesaleApps.filter(a => a.status === 'PENDING').length} Pending Review
          </span>
        </div>

        {wholesaleApps.length === 0 ? (
          <div className="p-8 bg-white rounded-3xl border border-[#D9A99A]/40 text-center text-xs text-[#6F5145]">
            No wholesale partner applications submitted yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {wholesaleApps.map((app) => (
              <div
                key={app.id}
              className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Status & Business Title */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h5 className="font-editorial text-lg font-bold text-[#332822]">
                      {app.businessName}
                    </h5>
                    <span className="text-xs font-semibold text-[#6F5145] block">
                      {app.businessType} • {app.city}, {app.state}
                    </span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                    app.status === 'APPROVED'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {app.status}
                  </span>
                </div>

                {/* Contact info */}
                <div className="p-3 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/30 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-[#332822]">
                    <span className="font-semibold">Contact:</span>
                    <span>{app.contactPerson}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6F5145]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{app.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6F5145]">
                    <Mail className="w-3.5 h-3.5" />
                    <span>{app.email}</span>
                  </div>
                  {app.gst && (
                    <div className="text-[11px] font-mono text-[#6F5145] pt-1 border-t border-[#D9A99A]/20">
                      GST: {app.gst}
                    </div>
                  )}
                </div>

                {/* Tier Info */}
                <div className="text-xs text-[#332822]">
                  <span className="font-bold text-[#6F5145]">Assigned Tier: </span>
                  <span className="font-bold text-[#B96F58]">{app.tier || 'Silver Tier (15% Off)'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-[#D9A99A]/30 text-xs">
                {app.status !== 'APPROVED' ? (
                  <>
                    <button
                      onClick={() => onUpdateAppStatus(app.id, 'APPROVED', 'Silver Tier (15% Off)')}
                      className="flex-1 px-3 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Approve (Silver Tier)</span>
                    </button>

                    <button
                      onClick={() => onUpdateAppStatus(app.id, 'APPROVED', 'Gold Tier (25% Off)')}
                      className="px-3 py-2 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all shadow-xs"
                      title="Approve with Gold Tier"
                    >
                      Gold (25%)
                    </button>

                    {onDeleteApp && (
                      <button
                        onClick={() => onDeleteApp(app.id)}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                        title="Delete application"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </>
                ) : (
                  <div className="w-full flex items-center justify-between text-emerald-800 font-bold text-xs py-1">
                    <span>Active Verified Partner</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onUpdateAppStatus(app.id, 'PENDING', 'Pending Review')}
                        className="text-xs text-[#6F5145] hover:underline font-normal"
                      >
                        Revoke Approval
                      </button>
                      {onDeleteApp && (
                        <button
                          onClick={() => onDeleteApp(app.id)}
                          className="text-rose-500 hover:text-rose-700"
                          title="Delete application"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            ))}
          </div>
        )}
      </div>

      {/* Section 2: Custom Bulk Event Enquiries */}
      <div className="space-y-4">
        <h4 className="font-editorial text-lg font-bold text-[#332822]">
          Corporate & Event Bulk Enquiries ({bulkEnquiries.length})
        </h4>

        {bulkEnquiries.length === 0 ? (
          <div className="p-8 bg-white rounded-3xl border border-[#D9A99A]/40 text-center text-xs text-[#6F5145]">
            No corporate or event bulk enquiries submitted yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {bulkEnquiries.map((enq) => (
              <div
                key={enq.id}
              className="p-5 bg-white rounded-3xl border border-[#D9A99A]/40 shadow-xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-editorial text-base font-bold text-[#332822]">
                    {enq.name}
                  </h5>
                  <span className="text-xs text-[#6F5145] font-medium block">
                    {enq.business}
                  </span>
                </div>
                <span className="px-3 py-1 bg-[#F4D2BE] text-[#B96F58] rounded-full text-xs font-bold">
                  {enq.quantity} units requested
                </span>
              </div>

              <div className="p-3 bg-[#FAF5EE] rounded-2xl border border-[#D9A99A]/30 text-xs space-y-1">
                <p className="font-bold text-[#332822]">Product: {enq.productName}</p>
                <p className="text-[#6F5145]">{enq.phone} • {enq.email}</p>
                {enq.notes && (
                  <p className="text-[#332822] italic pt-1 border-t border-[#D9A99A]/20">
                    "{enq.notes}"
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 text-xs">
                <span className="font-bold text-emerald-800">Status: {enq.status}</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${enq.email}?subject=GIFTPocket Bulk Quote - ${enq.productName}`}
                    className="px-3 py-1.5 bg-[#B96F58] hover:bg-[#332822] text-white font-bold rounded-xl transition-all"
                  >
                    Send Quotation Email
                  </a>
                  {onDeleteEnquiry && (
                    <button
                      onClick={() => onDeleteEnquiry(enq.id)}
                      className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
                      title="Delete inquiry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>

    </div>
  );
};
